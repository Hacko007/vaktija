using System;
using System.Windows;
using System.Windows.Controls;

namespace Vaktija
{
    /// <summary>
    ///     Interaction logic for Sat.xaml
    /// </summary>
    public partial class Sat : UserControl
    {
        private DateTime _time;

        public Sat()
        {
            InitializeComponent();
            Time = DateTime.Now;
        }

        public DateTime Time
        {
            get => _time;
            set
            {
                _time = value;
                label.Text = _time == null ? "" : _time.ToShortTimeString();
            }
        }
    }
}