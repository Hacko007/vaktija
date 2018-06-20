using System;
using System.Globalization;
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
        public MainPage()
        {
            InitializeComponent();

            CultureInfo.CurrentUICulture = new CultureInfo("bs-Latn-BA");
            Takvim = new Takvim();

            Task.Run(PokreniVaktijuAsync);
        }

        private Takvim Takvim { get; }
        private Dan Danas { get; set; }

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
            Danas = Takvim.Danas;

            await CoreApplication.MainView.CoreWindow.Dispatcher.RunAsync(
                CoreDispatcherPriority.Normal,
                () =>
                {
                    GlavniSat.Time = DateTime.Now;
                    Datum.SetDatum(Takvim.DrzavniPraznik);
                    DatumHidzretski.SetHidzretskiDatum(Takvim.VjerskiPraznik);

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