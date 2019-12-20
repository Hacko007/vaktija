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
    return Takvim;
}());
exports.Takvim = Takvim;
//# sourceMappingURL=takvim.js.map