using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;
using Windows.UI.Xaml.Controls;
using Vaktija.Data;

namespace Vaktija.UW
{
    /// <summary>
    ///     Glavna strana za vaktiju
    /// </summary>
    public sealed partial class MainPage : Page
    {
        //RTC_DS3231 _clock;

        public MainPage()
        {
            InitializeComponent();
            // Ako imate RTC instaliran na Raspberry Pi
            //RealTimeClock.SetTime();

            //InitRTC();

            CultureInfo.CurrentUICulture = new CultureInfo("bs-Latn-BA");
            Takvim = Vaktija.Data.Takvim.KreirajVaktiju();
            Praznici = Vaktija.Data.Takvim.GetSviPraznici();
            Task.Run(PokreniVaktijuAsync);
        }

        //private void InitRTC()
        //{
        //    _clock = new RTC_DS3231();
        //    Task.Run(()=> _clock.FindI2CAddressesAsync(Msg));
        //    DispatcherTimer timer = new DispatcherTimer() { Interval = TimeSpan.FromSeconds(1) };
        //    timer.Tick += (oo, ee) =>
        //    {
        //        var t = _clock.ReadTime();
        //        Time2.Text = t.HasValue ?t.ToString(): "No time";
        //        Temperature.Text = _clock.ReadTemperature().ToString();
        //    };
        //    timer.Start();
        //}

        //private async Task Msg(Message arg)
        //{
        //    await Task.Run(()=> Debug.WriteLine(arg));
        //}

        //private void Button_Click(object sender, RoutedEventArgs e)
        //{
        //    _clock.WriteTime(DateTime.Now.ToUniversalTime());
        //    DateTime dt = _clock.ReadTime().Value;
        //}


        //public static DateTime Time { get; set; } = DateTime.Now;

        private List<Dan> Takvim { get; }
        public List<Praznik> Praznici { get; }
        public Dan Danas { get; set; }

        private async Task PokreniVaktijuAsync()
        {
            while (true)
            {
                await PostaviVrijeme();
                await Task.Delay(1000);
            }
        }


        private async Task PostaviVrijeme()
        {
            //var rtcTime = await RealTimeClock.GetTimeFromDs3231();
            //Time = rtcTime ?? DateTime.Now;
            //Time = DateTime.Now;

            Danas = (from dan in Takvim
                where dan.Datum == DateTime.Today
                select dan).FirstOrDefault();

            var drzavniPraznik = (from praznik in Praznici
                where praznik.JeliOvoDanas(Kalendar.Georgianski)
                select praznik.Opis).FirstOrDefault();

            var vjerskiPraznik = (from praznik in Praznici
                where praznik.JeliOvoDanas(Kalendar.Hidzretski)
                select praznik.Opis).FirstOrDefault();

            await CoreApplication.MainView.CoreWindow.Dispatcher.RunAsync(
                CoreDispatcherPriority.Normal,
                () =>
                {
                    GlavniSat.Time = DateTime.Now;
                    Datum.SetDatum(drzavniPraznik);
                    DatumHidzretski.SetHidzretskiDatum(vjerskiPraznik);

                    if (Danas == null) return;

                    SetZora();
                    SetStyle(Podne, "Podne ", Danas.Podne, Danas.Ikindija);
                    SetStyle(Ikindija, "Ikindija", Danas.Ikindija, Danas.Aksam);
                    SetStyle(Aksam, "Akšam ", Danas.Aksam, Danas.Jacija);
                    SetJacija();
                });
        }


        private static void SetStyle(Red red, string vakat, TimeSpan pocetak, TimeSpan kraj)
        {
            var sad = DateTime.Now.TimeOfDay;

            if (pocetak > sad)
                red.StyleStandard();
            else if (pocetak <= sad && sad <= kraj)
                red.StyleVakatJe();
            else
                red.StyleProsloVrijeme();

            red.SetRed(vakat, pocetak);
        }


        private void SetZora()
        {
            var sad = DateTime.Now.TimeOfDay;
            if (Danas.Zora > sad)
            {
                Zora.StyleStandard();
            }
            else if (Danas.Zora <= sad && sad <= Danas.Sabah)
            {
                Zora.StyleStandard();
                Izlazak.StyleVakatJe();
            }
            else
            {
                Zora.StyleProsloVrijeme();
                Izlazak.StyleProsloVrijeme();
            }

            Zora.SetRed("Zora  ", Danas.Zora);
            Izlazak.SetRed("Sabah ", Danas.Sabah);
        }

        private void SetJacija()
        {
            var sad = DateTime.Now.TimeOfDay;
            if (Danas.Jacija > sad)
                Jacija.StyleStandard();
            else if (Danas.Jacija <= sad || sad < Danas.Zora) Jacija.StyleVakatJe();

            Jacija.SetRed("Jacija", Danas.Jacija);
        }
    }
}