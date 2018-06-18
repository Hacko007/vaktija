using System;
using System.Globalization;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

// The User Control item template is documented at https://go.microsoft.com/fwlink/?LinkId=234236

namespace VaktijaUW
{
    public sealed partial class Red : UserControl
    {
        
        public Red()
        {
            InitializeComponent();
            PraznikText.Text = "";
        }


        public void SetRed(string vakat, TimeSpan sat)
        {
            RedText.Text = string.Format("{0,-8} {1} ", vakat,
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
            RedStandardan();
            if (Application.Current.Resources["SatStandard"] is Style style)
                RedText.Style = style;            
        }


        public void StyleProsloVrijeme()
        {
            RedStandardan();
            if (Application.Current.Resources["SatProsloVrijeme"] is Style style)
                RedText.Style = style;
        }

        public void StyleVakatJe()
        {
            StyleRedVakatJe();
            if (Application.Current.Resources["SatVakatJe"] is Style style)
                RedText.Style = style;
        }

        private void PrikaziPraznik(string praznik)
        {
            if (!string.IsNullOrEmpty(praznik))
            {
                PraznikText.Text = "  -  " + praznik;
            }
            else
            {
                PraznikText.Text = "";
            }
        }

        private void RedStandardan()
        {
            if (Resources["RedStandard"] is Style redStyle)
                Style = redStyle;
        }
        private void StyleRedVakatJe()
        {
            if (Application.Current.Resources["Uvelicaj"] is Style redStyle)
                Style = redStyle;
        }

    }
}
