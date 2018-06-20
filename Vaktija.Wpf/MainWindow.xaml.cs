using System;
using System.Globalization;
using System.Threading.Tasks;
using System.Timers;
using System.Windows;
using Vaktija.Data;

namespace Vaktija.Wpf
{
    /// <summary>
    ///     Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            CultureInfo.CurrentCulture = CultureInfo.CreateSpecificCulture("bs-Latn-BA");
            Takvim = new Takvim();
            PostaviVrijeme();
            var timer = new Timer(1000);
            timer.Elapsed += Timer_Elapsed;
            timer.Start();
        }

        private Takvim Takvim { get; }
        private Dan Danas { get; set; }

        private void Timer_Elapsed(object sender, ElapsedEventArgs e)
        {
            Task.Run(() => PostaviVrijeme());
        }

        private void PostaviVrijeme()
        {
            Danas = Takvim.Danas;

            Application.Current.Dispatcher.Invoke(
                () =>
                {
                    GlavniSat.Time = DateTime.Now;

                    Datum.RedText.Text = DateTime.Today.ToLongDateString();
                    Datum.SetDatum(Takvim.DrzavniPraznik);
                    DatumHidzretski.SetHidzretskiDatum(Takvim.VjerskiPraznik);

                    Datum.StyleDatum();

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