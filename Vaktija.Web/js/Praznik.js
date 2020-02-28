var Praznik = /** @class */ (function () {
    function Praznik(kalendar, mjesec, dan, opis) {
        this.kalendar = kalendar;
        this.dan = dan;
        this.opis = opis;
    }
    Praznik.prototype.JeliOvoDanas = function (kalendar) {
        try {
            var now = new Date();
            if (kalendar == Kalendar.Georgianski)
                return this.kalendar == kalendar &&
                    now.getDate() == this.dan &&
                    now.getMonth() == this.mjesec;
            //if (int.TryParse(DateTime.Today.ToString("dd", new CultureInfo("ar-SA")), out int dan)
            //    && int.TryParse(DateTime.Today.ToString("MM", new CultureInfo("ar-SA")), out int mjesc)) {
            //    return dan == Dan &&
            //        mjesc == Mjesec;
            //}
        }
        catch (err) { }
        return false;
    };
    return Praznik;
}());
var Kalendar;
(function (Kalendar) {
    Kalendar[Kalendar["Georgianski"] = 0] = "Georgianski";
    Kalendar[Kalendar["Hidzretski"] = 1] = "Hidzretski";
})(Kalendar || (Kalendar = {}));
//# sourceMappingURL=praznik.js.map