class Main {
    
    private _takvim: Takvim;
    private _danas: Dan;

    get takvim(): Takvim {
        if (this._takvim == null) {
            this._takvim = new Takvim();
        }
        return this._takvim;
    }
    
    get danas(): Dan{
        if (this._danas == null) {
            this._danas = this.takvim.danas();
        } else {
            let now: Date = new Date();
            if (this._danas.datum.getMonth() != now.getMonth() || this._danas.datum.getDate() != now.getDate()) {
                this._danas = this.takvim.danas();
            }
        }
        return this._danas;
    }
    
    constructor() {        
        this.pokreniVaktiju();
    }

    private pokreniVaktiju() {
        //while (true) {
           // setTimeout(null, 1000);
            this.danas.setStyle();
            console.log(this.danas.zoraStyle);
        //}        
    }

}