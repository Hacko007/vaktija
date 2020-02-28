var Dan = /** @class */ (function () {
    function Dan(mjesec, dan, zorah, zoram, sabahh, sabahm, podneh, podnem, ikindijah, ikindijam, aksamh, aksamm, jacijah, jacijam) {
        this.standrad = "standard";
        this.vakatJe = "vakatJe";
        this.prosloVrijeme = "prosloVrijeme";
        try {
            var now = new Date();
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
        }
        catch (err) {
            console.log(err);
        }
    }
    Object.defineProperty(Dan.prototype, "imeDana", {
        get: function () {
            var options = { weekday: "long" };
            return this.datum.toLocaleDateString("hr", options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dan.prototype, "datumHijri", {
        get: function () {
            var h = HijriDate.writeIslamicDate(this.datum);
            if (this.datum.getDate() === 1 || h.dan === 1) {
                return h.dan + " " + h.mjesec;
            }
            return h.dan + "";
        },
        enumerable: true,
        configurable: true
    });
    Dan.prototype.setStyle = function () {
        this.setStyleZora();
        this.podneStyle = this.getStyle(this.podne, this.ikindija);
        this.ikindijaStyle = this.getStyle(this.ikindija, this.aksam);
        this.aksamStyle = this.getStyle(this.aksam, this.jacija);
        this.setStyleJacija();
    };
    Dan.prototype.sad = function () {
        var now = new Date();
        var sad = new TimeSpan().setTime(now.getHours(), now.getMinutes());
        return sad;
    };
    Dan.prototype.getStyle = function (pocetak, kraj) {
        var sad = this.sad();
        if (pocetak.totalMilliSeconds > sad.totalMilliSeconds)
            return this.standrad;
        else if (pocetak.totalMilliSeconds <= sad.totalMilliSeconds && sad.totalMilliSeconds <= kraj.totalMilliSeconds)
            return this.vakatJe;
        else
            return this.prosloVrijeme;
    };
    Dan.prototype.setStyleZora = function () {
        var sad = this.sad();
        if (this.zora.totalMilliSeconds > sad.totalMilliSeconds) {
            this.zoraStyle = this.standrad;
        }
        else if (this.zora.totalMilliSeconds <= sad.totalMilliSeconds && sad.totalMilliSeconds <= this.sabah.totalMilliSeconds) {
            this.zoraStyle = this.standrad;
            this.sabahStyle = this.vakatJe;
        }
        else {
            this.zoraStyle = this.prosloVrijeme;
            this.sabahStyle = this.prosloVrijeme;
        }
    };
    Dan.prototype.setStyleJacija = function () {
        var sad = this.sad();
        if (this.jacija.totalMilliSeconds <= sad.totalMilliSeconds || sad.totalMilliSeconds < this.zora.totalMilliSeconds)
            this.jacijaStyle = this.vakatJe;
        else
            this.jacijaStyle = this.standrad;
    };
    return Dan;
}());
//# sourceMappingURL=dan.js.map