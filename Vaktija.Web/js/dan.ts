class Dan {

    datum: Date;
    zora: TimeSpan;
    sabah: TimeSpan;
    podne: TimeSpan;
    ikindija: TimeSpan;
    aksam: TimeSpan;
    jacija: TimeSpan;

    zoraStyle: string;
    sabahStyle: string;
    podneStyle: string;
    ikindijaStyle: string;
    aksamStyle: string;
    jacijaStyle: string;

    standrad: string = "standard";
    vakatJe: string = "vakatJe";
    prosloVrijeme: string = "prosloVrijeme";

    constructor(mjesec: number,
        dan: number,
        zorah: number,
        zoram: number,
        sabahh: number,
        sabahm: number,
        podneh: number,
        podnem: number,
        ikindijah: number,
        ikindijam: number,
        aksamh: number,
        aksamm: number,
        jacijah: number,
        jacijam: number) {

        try {
            const now = new Date();
            this.datum = new Date(now.getFullYear(), mjesec, dan);

            this.zora = new TimeSpan().setTime(zorah, zoram);
            this.sabah = new TimeSpan().setTime(sabahh, sabahm);
            this.podne = new TimeSpan().setTime(podneh, podnem);
            this.ikindija = new TimeSpan().setTime(ikindijah, ikindijam);
            this.aksam = new TimeSpan().setTime(aksamh, aksamm);
            this.jacija = new TimeSpan().setTime(jacijah, jacijam);

            this.zoraStyle = this.standrad;
            this.sabahStyle = this.standrad;
            this.podneStyle = this.standrad;
            this.ikindijaStyle = this.standrad;
            this.aksamStyle = this.standrad;
            this.jacijaStyle = this.standrad;
        } catch (err) {
            console.log(err);
        }
    }

    get imeDana(): string {
        const options = { weekday: "long"};
        return this.datum.toLocaleDateString("hr", options);
    }

    get datumHijri(): string {
        const h = HijriDate.writeIslamicDate(this.datum);
        if (this.datum.getDate() === 1 || h.dan === 1) {
            return h.dan + " " + h.mjesec;
        }
        return h.dan + "";
        
    }

    setStyle() {
        this.setStyleZora();
        this.podneStyle = this.getStyle(this.podne, this.ikindija);
        this.ikindijaStyle = this.getStyle(this.ikindija, this.aksam);
        this.aksamStyle = this.getStyle(this.aksam, this.jacija);
        this.setStyleJacija();
    }

    sad(): TimeSpan {
        const now = new Date();
        const sad = new TimeSpan().setTime(now.getHours(), now.getMinutes());
        return sad;
    }



    getStyle(pocetak: TimeSpan, kraj: TimeSpan): string {

        const sad = this.sad();

        if (pocetak.totalMilliSeconds > sad.totalMilliSeconds )
            return this.standrad;
        else if (pocetak.totalMilliSeconds <= sad.totalMilliSeconds && sad.totalMilliSeconds <= kraj.totalMilliSeconds )
            return this.vakatJe;
        else
            return this.prosloVrijeme;
    }

    setStyleZora() {
        const sad = this.sad();
       
        if (this.zora.totalMilliSeconds > sad.totalMilliSeconds ) {
            this.zoraStyle = this.standrad;
        }
        else if (this.zora.totalMilliSeconds <= sad.totalMilliSeconds && sad.totalMilliSeconds <= this.sabah.totalMilliSeconds ) {
            this.zoraStyle = this.standrad;
            this.sabahStyle = this.vakatJe;
        }
        else {
            this.zoraStyle = this.prosloVrijeme;
            this.sabahStyle = this.prosloVrijeme;
        }
    }

    setStyleJacija() {
        const sad = this.sad();
       
        if (this.jacija.totalMilliSeconds <= sad.totalMilliSeconds || sad.totalMilliSeconds < this.zora.totalMilliSeconds )
            this.jacijaStyle = this.vakatJe;
        else
            this.jacijaStyle = this.standrad;
    }

}