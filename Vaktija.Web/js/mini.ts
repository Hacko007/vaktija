class Mini {

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
        this.updateTime(this);
    }

    setStyle(id: string, sat: string) {
        try {
            const satDiv = document.getElementById(id);
            satDiv.textContent = sat;
            
        } catch (e) {
        }
    }

    updateTime(main: Mini) {
        try {
            main.setStyle("zora", main.danas.zora.sat());
            main.setStyle("sabah", main.danas.sabah.sat());
            main.setStyle("podne", main.danas.podne.sat());
            main.setStyle("ikindija", main.danas.ikindija.sat());
            main.setStyle("aksam", main.danas.aksam.sat());
            main.setStyle("jacija", main.danas.jacija.sat());
        } catch (e) {
            console.log(e);
        }

    }
}