class Main {

    private _takvim: Takvim;
    private _danas: Dan;

    get takvim(): Takvim {
        if (this._takvim == null) {
            this._takvim = new Takvim();
        }
        return this._takvim;
    }

    get danas(): Dan {
        if (this._danas == null) {
            this._danas = this.takvim.danas();
        } else {
            const now = new Date();
            if (this._danas.datum.getMonth() != now.getMonth() || this._danas.datum.getDate() != now.getDate()) {
                this._danas = this.takvim.danas();
            }
        }
        return this._danas;
    }

    constructor() {
        this.pokreniVaktiju();
    }

     pokreniVaktiju() {

        this.danas.setStyle();
        setInterval(this.updateTime, 1000, this);

    }

     setStyle(id:string, sat :string, className:string) {
        try {
            const satDiv = document.getElementById(id);
            satDiv.textContent = sat;
            const red = document.getElementById(id + "-red");
            red.className = className;
        } catch (e) {
        }
    }

     updateTime(main:Main) {
        try {

            const now = new Date();
            const sad = new TimeSpan();
            sad.setTime(now.getHours(), now.getMinutes(), now.getSeconds());;

            const sat = document.getElementById("sat");
            sat.textContent = sad.sat();
            

            main.setStyle("zora", main.danas.zora.sat(), main.danas.zoraStyle);
            main.setStyle("sabah", main.danas.sabah.sat(), main.danas.sabahStyle);
            main.setStyle("podne", main.danas.podne.sat(), main.danas.podneStyle);
            main.setStyle("ikindija", main.danas.ikindija.sat(), main.danas.ikindijaStyle);
            main.setStyle("aksam", main.danas.aksam.sat(), main.danas.aksamStyle);
            main.setStyle("jacija", main.danas.jacija.sat(), main.danas.jacijaStyle);

            const options = { weekday: "long", year: "numeric", month: "numeric", day: "numeric" };
            const d = document.getElementById("datum");
            d.textContent = now.toLocaleDateString("hr", options);

        } catch (e) {
            console.log(e);
        }

    }
}