import _ = require("./dan");
import Dan = _.Dan;
import p = require("./Praznik");
import Praznik = p.Praznik;

export class Takvim {
    danas: Dan;
    drzavniPraznik: string;
    vjerskiPraznik: string;
    vremena: Dan[];
    praznici: Praznik[];

    constructor() {
        this.vremena = this.kreirajVaktiju();
        this.praznici = this.getSviPraznici();
        this.drzavniPraznik = this.getDrzavniPraznik();
        this.vjerskiPraznik = this.getVjerskiPraznik();
    }

    kreirajVaktiju():Dan[] {
        return null;
    }

    getSviPraznici(): Praznik[] { return null }

    getDrzavniPraznik(): string { throw new Error("Not implemented"); }

    getVjerskiPraznik(): string { throw new Error("Not implemented"); }

    static GetSviPraznici(): Praznik[] {
        return 
        {
            //Ramazan
        //    new Praznik(Kalendar.Hidzretski, 9, 1, "Prvi dan posta"),
        //new Praznik(Kalendar.Hidzretski, 9, 16, "Lejletul Bedr"),
        //    new Praznik(Kalendar.Hidzretski, 9, 20, "Ulaz u i'tikaf"),
        //    new Praznik(Kalendar.Hidzretski, 9, 26, "Lejletul Kadr"),

        //    new Praznik(Kalendar.Hidzretski, 10, 1, "Ramazanski bajram - prvi dan"),
        //    new Praznik(Kalendar.Hidzretski, 10, 2, "Ramazanski bajram - drugi dan"),
        //    new Praznik(Kalendar.Hidzretski, 10, 3, "Ramazanski bajram - treći dan")
    };
}
}