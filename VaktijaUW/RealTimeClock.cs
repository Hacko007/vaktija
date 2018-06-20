using System;
using System.Diagnostics;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using Windows.Devices.Enumeration;
using Windows.Devices.I2c;

namespace VaktijaUW
{

    public class Message
    {
        public Message(string msg)
        {
             Msg  = msg;
        }

        public string Msg { get; }
        public override string ToString()
        {
            return Msg;
        }
    }

    public class RTC_DS3231
    {
        I2cDevice _device;

        private bool InitComplete { get; set; } = false;

        public RTC_DS3231() : this(0x68)
        {
        }

        public RTC_DS3231(int address)
        {
            Init(address);
        }


        public async Task<bool> FindI2CAddressesAsync(Func<Message, Task> onMessageReceived)
        {
            string aqs = I2cDevice.GetDeviceSelector("I2C1");

            var i2CDevices = await DeviceInformation.FindAllAsync(aqs).AsTask().ConfigureAwait(false);
            if (i2CDevices.Count == 0)
            {
                await onMessageReceived(new Message("bus not found")).ConfigureAwait(false);
                return false;
            }

            for (byte slaveAddress = 0x00; slaveAddress <= 0x7F; slaveAddress++)
            {
                var settings = new I2cConnectionSettings(slaveAddress)
                {
                    BusSpeed = I2cBusSpeed.FastMode,
                    SharingMode = I2cSharingMode.Shared
                };

                foreach (var i2CDevice in i2CDevices)
                {
                    var i2CDeviceDetails = await I2cDevice.FromIdAsync(i2CDevice.Id, settings).AsTask().ConfigureAwait(false);

                    try
                    {
                        var testCommand = new byte[] { 0x00, 0x0 };
                        i2CDeviceDetails.Read(testCommand);

                        await onMessageReceived(new Message($"SlaveAddress: {settings.SlaveAddress:X} SUCCESS \n"));
                    }
                    catch (Exception)
                    {
                        await onMessageReceived(new Message($"SlaveAddress: {settings.SlaveAddress:X} FAILED \n"));
                    }
                }
            }

            return false;
        }


        private async void Init(int address)
        {
            if (InitComplete)
                return;
            try
            {
                var advancedQuerySyntaxString = I2cDevice.GetDeviceSelector();
                var controllerDeviceIds = await DeviceInformation.FindAllAsync(advancedQuerySyntaxString);
                I2cConnectionSettings connectionSettings = new I2cConnectionSettings(address)
                {
                    BusSpeed = I2cBusSpeed.StandardMode
                };
                _device = await I2cDevice.FromIdAsync(controllerDeviceIds[0].Id, connectionSettings);
                InitComplete = true;
            }
            catch (Exception ex)
            {
                Debug.Write(ex.Message);
            }
        }

        public DateTime? ReadTime()
        {
            try
            {

            byte[] readBuffer = new byte[0x13];
            _device.WriteRead(new byte[] { 0x00 }, readBuffer);

            int seconds = BcdToInt(readBuffer[0]);
            int minutes = BcdToInt(readBuffer[1]);
            bool is24HourCock = (readBuffer[2] >> 0x6) != 1;
            int hours;
            if (is24HourCock)
                hours = (readBuffer[2] & 0xF) + ((readBuffer[2] >> 4) & 0x1) * 10 + ((readBuffer[2] >> 0x5) * 20);
            else
                hours = (readBuffer[2] & 0xF) + ((readBuffer[2] >> 4) & 0x1) * 10 + ((readBuffer[2] >> 0x5) * 12); ;
            int day = BcdToInt(readBuffer[3]);
            int date = BcdToInt(readBuffer[4]);
            int months = BcdToInt((byte)(readBuffer[5] & (byte)0x3f));
            int year = BcdToInt(readBuffer[6]);
            float temperature = (float)BcdToInt(readBuffer[11]) + ((float)(readBuffer[11] >> 0x6)) * 0.25f;
            return new DateTime(2000 + year, months, date, hours, minutes, seconds);

            }
            catch (Exception ex)
            {
                Debug.Write(ex.Message);
                return null;
            }
        }

        public float ReadTemperature()
        {
            try
            {
                byte[] buffer = new byte[2];
                _device.WriteRead(new byte[] { 0x11 }, buffer);
                float temperature = (float)buffer[0] + ((float)(buffer[1] >> 6) / 4f);
                return temperature;
            }
            catch (Exception ex)
            {
                Debug.Write(ex.Message);
                return 0;
            }
        }

        public void WriteTime(DateTime dateTime)
        {
            byte[] buffer = new byte[8];
            int offset = 0;
            buffer[offset++] = 0;
            buffer[offset++] = IntToBcd(dateTime.Second);
            buffer[offset++] = IntToBcd(dateTime.Minute);
            buffer[offset++] = IntToBcd(dateTime.Hour);
            buffer[offset++] = (byte)dateTime.DayOfWeek;
            buffer[offset++] = IntToBcd(dateTime.Day);
            buffer[offset++] = IntToBcd(dateTime.Month);
            buffer[offset++] = IntToBcd(dateTime.Year % 100);
            _device.Write(buffer);

        }


        static int BcdToInt(byte bcd)
        {
            int retVal = (bcd & 0xF) + ((bcd >> 4) * 10);
            return retVal;
        }

        static byte IntToBcd(int v)
        {
            var retVal = (byte)((v % 10) | (v / 10) << 0x4);
            return retVal;
        }
    }









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