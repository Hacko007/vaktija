using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;
using Windows.UI.Xaml.Controls;

namespace VaktijaUW
{
    /// <summary>
    ///     Glavna strana za vaktiju
    /// </summary>
    public sealed partial class MainPage : Page
    {
        public MainPage()
        {
            InitializeComponent();
            // Ako imate RTC instaliran na Raspberry Pi
            RealTimeClock.SetTime();

            CultureInfo.CurrentUICulture = new CultureInfo("bs-Latn-BA");
            Takvim = VaktijaUW.Takvim.KreirajVaktiju();
            Praznici = VaktijaUW.Takvim.GetSviPraznici();
            Task.Run(PokreniVaktijuAsync);
        }

        public static DateTime Time { get; set; } = DateTime.Now;

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
            var rtcTime = await RealTimeClock.GetTimeFromDs3231();
            Time = rtcTime ?? DateTime.Now;

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
                    SetStyle(Podne, "Podne", Danas.Podne, Danas.Ikindija);
                    SetStyle(Ikindija, "Ikindija", Danas.Ikindija, Danas.Aksam);
                    SetStyle(Aksam, "Akšam", Danas.Aksam, Danas.Jacija);
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

            Zora.SetRed("Zora", Danas.Zora);
            Izlazak.SetRed("Sabah", Danas.Sabah);
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