 class Dan {

    datum: Date;
    zora: TimeSpan;
    sabah: TimeSpan;
    podne: TimeSpan;
    ikindija: TimeSpan;
    aksam: TimeSpan;
    jacija: TimeSpan;


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
            this.zora.hours = zorah ;
            this.zora.minutes = zoram ;

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

        } catch (err) {
        }
    }
}
