var Dan = /** @class */ (function () {
    function Dan(mjesec, dan, zorah, zoram, sabahh, sabahm, podneh, podnem, ikindijah, ikindijam, aksamh, aksamm, jacijah, jacijam) {
        this.standrad = "standard";
        this.vakatJe = "vakatJe";
        this.prosloVrijeme = "prosloVrijeme";
        try {
            var now = new Date();
            this.datum = new Date(now.getFullYear(), mjesec, dan);
            this.zora = new TimeSpan();
            this.zora.hours = zorah;
            this.zora.minutes = zoram;
            this.sabah = new TimeSpan();
            this.sabah.hours = sabahh;
            this.sabah.minutes = sabahm;
            this.podne = new TimeSpan();
            this.podne.minutes = podnem;
            this.podne.hours = podneh;
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
        }
        catch (err) {
            console.log(err);
        }
    }
    Dan.prototype.setStyle = function () {
        this.setStyleZora();
        this.podneStyle = this.getStyle(this.podne, this.ikindija);
        this.ikindijaStyle = this.getStyle(this.ikindija, this.aksam);
        this.aksamStyle = this.getStyle(this.aksam, this.jacija);
        this.setStyleJacija();
    };
    Dan.prototype.sad = function () {
        var now = new Date();
        var sad = new TimeSpan();
        sad.hours = now.getHours();
        sad.minutes = now.getMinutes();
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