"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Takvim = /** @class */ (function () {
    function Takvim() {
        this.vremena = this.kreirajVaktiju();
        this.praznici = this.getSviPraznici();
        this.drzavniPraznik = this.getDrzavniPraznik();
        this.vjerskiPraznik = this.getVjerskiPraznik();
    }
    Takvim.prototype.kreirajVaktiju = function () {
        return null;
    };
    Takvim.prototype.getSviPraznici = function () { return null; };
    Takvim.prototype.getDrzavniPraznik = function () { throw new Error("Not implemented"); };
    Takvim.prototype.getVjerskiPraznik = function () { throw new Error("Not implemented"); };
    Takvim.GetSviPraznici = function () {
        return;
        {
            //Ramazan
            //    new Praznik(Kalendar.Hidzretski, 9, 1, "Prvi dan posta"),
            //new Praznik(Kalendar.Hidzretski, 9, 16, "Lejletul Bedr"),
            //    new Praznik(Kalendar.Hidzretski, 9, 20, "Ulaz u i'tikaf"),
            //    new Praznik(Kalendar.Hidzretski, 9, 26, "Lejletul Kadr"),
            //    new Praznik(Kalendar.Hidzretski, 10, 1, "Ramazanski bajram - prvi dan"),
            //    new Praznik(Kalendar.Hidzretski, 10, 2, "Ramazanski bajram - drugi dan"),
            //    new Praznik(Kalendar.Hidzretski, 10, 3, "Ramazanski bajram - treći dan")
        }
        ;
    };
    return Takvim;
}());
exports.Takvim = Takvim;
//# sourceMappingURL=takvim.js.map