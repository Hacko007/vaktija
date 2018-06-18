using System;
using Windows.UI.Xaml.Controls;

// The User Control item template is documented at https://go.microsoft.com/fwlink/?LinkId=234236

namespace VaktijaUW
{
    public sealed partial class Sat : UserControl
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
                
                label.Text = _time == null ? "" : _time.ToString("t");
            }
        }
       
    }
}
