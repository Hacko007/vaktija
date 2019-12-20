"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timespan = require("./timespan");
var TimeSpan = Timespan.TimeSpan;
var Dan = /** @class */ (function () {
    function Dan(mjesec, dan, zorah, zoram, sabahh, sabahm, podneh, podnem, ikindijah, ikindijam, aksamh, aksamm, jacijah, jacijam) {
        try {
            var now = new Date();
            this.datum = new Date(now.getFullYear(), mjesec, dan);
            this.zora = new TimeSpan(zorah * TimeSpan.Hour().milliseconds + (zoram * TimeSpan.Minute().milliseconds));
            this.sabah =
                new TimeSpan(sabahh * TimeSpan.Hour().milliseconds + (sabahm * TimeSpan.Minute().milliseconds));
            this.podne =
                new TimeSpan(podneh * TimeSpan.Hour().milliseconds + (podnem * TimeSpan.Minute().milliseconds));
            this.ikindija =
                new TimeSpan(ikindijah * TimeSpan.Hour().milliseconds + (ikindijam * TimeSpan.Minute().milliseconds));
            this.aksam =
                new TimeSpan(aksamh * TimeSpan.Hour().milliseconds + (aksamm * TimeSpan.Minute().milliseconds));
            this.jacija =
                new TimeSpan(jacijah * TimeSpan.Hour().milliseconds + (jacijam * TimeSpan.Minute().milliseconds));
        }
        catch (err) {
        }
    }
    return Dan;
}());
exports.Dan = Dan;
//# sourceMappingURL=dan.js.map