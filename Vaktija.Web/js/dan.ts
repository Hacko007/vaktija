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
            let now: Date = new Date();
            this.datum = new Date(now.getFullYear(), mjesec, dan);

            this.zora = new TimeSpan();
            this.zora.hours = zorah;
            this.zora.minutes = zoram;

            this.sabah = new TimeSpan();
            this.sabah.hours = sabahh;
            this.sabah.minutes = sabahm;


            this.podne = new TimeSpan();
            this.podne.hours = podneh;
            this.podne.minutes = podnem;

            this.ikindija = new TimeSpan();
            this.ikindija.hours = ikindijah;
            this.ikindija.minutes = ikindijam;

            this.aksam = new TimeSpan();
            this.aksam.hours = aksamh;
            this.aksam.minutes = aksamm;

            this.jacija = new TimeSpan();
            this.jacija.hours = jacijah;
            this.jacija.minutes = jacijam;

            this.zoraStyle = this.standrad;
            this.sabahStyle = this.standrad;
            this.podneStyle = this.standrad;
            this.ikindijaStyle = this.standrad;
            this.aksamStyle = this.standrad;
            this.jacijaStyle = this.standrad;
        } catch (err) {
        }
    }

    setStyle() {
        this.setStyleZora();
        this.podneStyle = this.getStyle(this.podne, this.ikindija);
        this.ikindijaStyle = this.getStyle(this.ikindija, this.aksam);
        this.aksamStyle = this.getStyle(this.aksam, this.jacija);
        this.setStyleJacija();
    }

    sad(): TimeSpan {
        let now: Date = new Date();
        let sad: TimeSpan = new TimeSpan();
        sad.hours = now.getHours();
        sad.minutes = now.getMinutes();
        return sad;
    }



    getStyle(pocetak: TimeSpan, kraj: TimeSpan): string {

        let sad: TimeSpan = this.sad();

        if (pocetak > sad)
            return this.standrad;
        else if (pocetak <= sad && sad <= kraj)
            return this.vakatJe;
        else
            return this.prosloVrijeme;
    }

    setStyleZora() {
        let sad: TimeSpan = this.sad();

        if (this.zora > sad) {
            this.zoraStyle = this.standrad;
        }
        else if (this.zora <= sad && sad <= this.sabah) {
            this.zoraStyle = this.standrad;
            this.sabahStyle = this.vakatJe;
        }
        else {
            this.zoraStyle = this.prosloVrijeme;
            this.sabahStyle = this.prosloVrijeme;
        }
    }


    setStyleJacija() {
        let sad: TimeSpan = this.sad();

        //if (this.danas.jacija > sad)
        //    return "standard";
        if (this.jacija <= sad || sad < this.zora)
            this.jacijaStyle = this.vakatJe;
        else
            this.jacijaStyle = this.standrad;
    }

}
