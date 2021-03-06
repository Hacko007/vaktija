﻿using System;
using System.Globalization;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

// The User Control item template is documented at https://go.microsoft.com/fwlink/?LinkId=234236

namespace Vaktija.UW
{
    public sealed partial class Red : UserControl
    {
        private CultureInfo ArabCultureInfo { get; set; } 
        private CultureInfo BihCultureInfo { get; set; } 

        public Red()
        {
            InitializeComponent();
            PraznikText.Text = "";
            ArabCultureInfo = new CultureInfo("ar-SA");
            BihCultureInfo = new CultureInfo("bs-Latn-BA");
        }


        public void SetRed(string vakat, TimeSpan sat)
        {
            RedText.Text = string.Format(" {0} {1} ", vakat,
                sat.ToString(@"hh\:mm"));
        }

        public void SetDatum(string drzavniPraznik)
        {
            var danas = DateTime.Today.ToString("D", BihCultureInfo);
            try
            {
                RedText.Text = BihCultureInfo.TextInfo.ToTitleCase(danas);
            }
            catch {
                RedText.Text = danas;
            }

            PrikaziPraznik(drzavniPraznik);
            if (Resources["Datum"] is Style style)
                RedText.Style = style;

        }

  
        public void SetHidzretskiDatum(string vjerskiPraznik)
        {            
            PrikaziPraznik(vjerskiPraznik);
            
            RedText.Text = DateTime.Today.ToString("D", ArabCultureInfo); 
            
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
