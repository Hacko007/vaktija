using System;
using System.Globalization;
using System.Windows;
using System.Windows.Controls;

namespace Vaktija.Wpf
{
    /// <summary>
    ///     Interaction logic for Red.xaml
    /// </summary>
    public partial class Red : UserControl
    {
        public Red()
        {
            InitializeComponent();
            PraznikText.Text = "";
        }

        public void SetRed(string vakat, TimeSpan sat)
        {
            RedText.Text = string.Format(CultureInfo.InvariantCulture, " {0,-8}  {1} ", vakat,
                sat.ToString(@"hh\:mm"));
        }

        public void SetDatum(string drzavniPraznik)
        {
            RedText.Text = DateTime.Today.ToString("D", new CultureInfo("bs-Latn-BA"));
            PrikaziPraznik(drzavniPraznik);
            if (Resources["Datum"] is Style style)
                RedText.Style = style;
        }

        public void SetHidzretskiDatum(string vjerskiPraznik)
        {
            PrikaziPraznik(vjerskiPraznik);

            RedText.Text = DateTime.Today.ToString("D", new CultureInfo("ar-SA"));

            if (Resources["Datum"] is Style style)
                RedText.Style = style;
        }


        public void StyleStandard()
        {
            if (Application.Current.FindResource("SatStandard") is Style style)
                RedText.Style = style;

            if (Resources["RedStandard"] is Style redStyle)
                Style = redStyle;
        }

        public void StyleProsloVrijeme()
        {
            if (Application.Current.FindResource("SatProsloVrijeme") is Style style)
                RedText.Style = style;

            if (Resources["RedStandard"] is Style redStyle)
                Style = redStyle;
        }

        public void StyleVakatJe()
        {
            if (Application.Current.FindResource("SatVakatJe") is Style style)
                RedText.Style = style;

            if (Resources["RedVakatJe"] is Style redStyle)
                Style = redStyle;
        }

        public void StyleDatum()
        {
            if (Resources["Datum"] is Style style)
                RedText.Style = style;

            if (Resources["RedStandard"] is Style redStyle)
                Style = redStyle;
        }


     
        private void PrikaziPraznik(string praznik)
        {
            if (!string.IsNullOrEmpty(praznik))
                PraznikText.Text = "  -  " + praznik;
            else
                PraznikText.Text = "";
        }
    }
}