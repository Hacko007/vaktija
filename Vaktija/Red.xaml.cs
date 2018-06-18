using System;
using System.Globalization;
using System.Windows;
using System.Windows.Controls;

namespace Vaktija
{
    /// <summary>
    ///     Interaction logic for Red.xaml
    /// </summary>
    public partial class Red : UserControl
    {
        public Red()
        {
            InitializeComponent();
        }

        public void SetRed(string vakat, TimeSpan sat)        
        {            
            RedText.Text = string.Format(CultureInfo.InvariantCulture, " {0,-10}  {1} ", vakat,
                sat.ToString(@"hh\:mm"));
        }

        public void StyleStandard()
        {
            if (Application.Current.FindResource("SatStandard") is Style style)
                RedText.Style = style;

            if (Application.Current.FindResource("RedStandard") is Style redStyle)
                Style = redStyle;
        }

        public void StyleProsloVrijeme()
        {
            if (Application.Current.FindResource("SatProsloVrijeme") is Style style)
                RedText.Style = style;

            if (Application.Current.FindResource("RedStandard") is Style redStyle)
                Style = redStyle;
        }

        public void StyleVakatJe()
        {
            if (Application.Current.FindResource("SatVakatJe") is Style style)
                RedText.Style = style;

            if (Application.Current.FindResource("RedVakatJe") is Style redStyle)
                Style = redStyle;
        }

        public void StyleDatum()
        {
            if (Application.Current.FindResource("Datum") is Style style)
                RedText.Style = style;

            if (Application.Current.FindResource("RedStandard") is Style redStyle)
                Style = redStyle;
        }

       
    }
}