var Dan = /** @class */ (function () {
    function Dan(mjesec, dan, zorah, zoram, sabahh, sabahm, podneh, podnem, ikindijah, ikindijam, aksamh, aksamm, jacijah, jacijam) {
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
        }
        catch (err) {
        }
    }
    return Dan;
}());
//# sourceMappingURL=dan.js.map