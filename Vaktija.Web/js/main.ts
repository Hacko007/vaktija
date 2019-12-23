class Main {
    
    takvim: Takvim;
    danas: Dan;

    constructor() {
        this.takvim = new Takvim();
        this.danas = this.takvim.danas();
        setInterval(this.pokreniVaktiju, 1000);
    }

    pokreniVaktiju() {

        let now: Date = new Date();
        if (this.danas.datum.getMonth() != now.getMonth() || this.danas.datum.getDate() != now.getDate()) {
            this.danas = this.takvim.danas();
        }
        this.danas.setStyle();
    }

   

}