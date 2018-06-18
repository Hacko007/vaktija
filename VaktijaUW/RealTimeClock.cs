using System;
using System.Diagnostics;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using Windows.Devices.Enumeration;
using Windows.Devices.I2c;

namespace VaktijaUW
{
    /// <summary>
    ///     Ako imete DS3231 (RTC) dogradjen na Raspberry Pi
    ///     onda koristi ovu klasu da postavis i/ili da citas vrijeme
    ///     sa chipa.
    /// </summary>
    public class RealTimeClock
    {
        /* DS3231 I2C SLAVE address */
        private const int SlaveAddress = 0x68;

        private static string _aqs;
        private static DeviceInformationCollection _dis;

        public static async Task<DateTime?> GetTimeFromDs3231()
        {
            try
            {
                // Initialize I2C
                var settings = new I2cConnectionSettings(SlaveAddress) {BusSpeed = I2cBusSpeed.StandardMode};

                if (_aqs == null || _dis == null)
                {
                    _aqs = I2cDevice.GetDeviceSelector("I2C1");
                    _dis = await DeviceInformation.FindAllAsync(_aqs);
                }

                using (var device = await I2cDevice.FromIdAsync(_dis[0].Id, settings))
                {
                    byte[] writeBuf = {0x00};
                    device.Write(writeBuf);
                    var readBuf = new byte[7];
                    device.Read(readBuf);
                    var second = BcdToDec((byte) (readBuf[0] & 0x7f));
                    var minute = BcdToDec(readBuf[1]);
                    var hour = BcdToDec((byte) (readBuf[2] & 0x3f));
                    var dayOfWeek = BcdToDec(readBuf[3]);
                    var dayOfMonth = BcdToDec(readBuf[4]);
                    var month = BcdToDec(readBuf[5]);
                    var year = BcdToDec(readBuf[6]);
                    var time = new DateTime(year, month, dayOfMonth, hour, minute, second);
                    return time;
                }
            }
            catch (Exception)
            {
                Debug.WriteLine("Error in I2C_Time Class");
            }

            return null;
        }

        private static byte BcdToDec(byte val)
        {
            return (byte) (val / 16 * 10 + val % 16);
        }

        public static void SetTime()
        {
            var isInternetConnected = NetworkInterface.GetIsNetworkAvailable();
            if (isInternetConnected) SetTimeToDs3231(DateTime.Now);
        }

        private static async void SetTimeToDs3231(DateTime time)
        {
            try
            {
                // Initialize I2C
                var settings = new I2cConnectionSettings(SlaveAddress) {BusSpeed = I2cBusSpeed.StandardMode};

                if (_aqs == null || _dis == null)
                {
                    _aqs = I2cDevice.GetDeviceSelector("I2C1");
                    _dis = await DeviceInformation.FindAllAsync(_aqs);
                }

                using (var device = await I2cDevice.FromIdAsync(_dis[0].Id, settings))
                {
                    var writeSeconds = DecToBcd((byte) time.Second);
                    var writeMinutes = DecToBcd((byte) time.Minute);
                    var writeHours = DecToBcd((byte) time.Hour);
                    var writeDayofweek = DecToBcd((byte) time.DayOfWeek);
                    var writeDay = DecToBcd((byte) time.Day);
                    var writeMonth = DecToBcd((byte) time.Month);
                    var writeYear = DecToBcd((byte) (time.Year % 100));

                    byte[] writeTime =
                        {0x00, writeSeconds, writeMinutes, writeHours, writeDayofweek, writeDay, writeMonth, writeYear};

                    device.Write(writeTime);
                }
            }
            catch (Exception ex)
            {
                Debug.Write(ex.Message);
            }
        }

        private static byte DecToBcd(byte val)
        {
            return (byte) (val / 10 * 16 + val % 10);
        }
    }
}