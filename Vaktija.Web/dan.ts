import Timespan = require("./timespan");
import TimeSpan = Timespan.TimeSpan;


export class Dan {

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
            var now: Date = new Date();
            this.datum = new Date(now.getFullYear(), mjesec, dan);
            this.zora = new TimeSpan(
                zorah * TimeSpan.Hour().milliseconds + (zoram * TimeSpan.Minute().milliseconds));
            this.sabah =
                new TimeSpan(sabahh * TimeSpan.Hour().milliseconds + (sabahm * TimeSpan.Minute().milliseconds));
            this.podne =
                new TimeSpan(podneh * TimeSpan.Hour().milliseconds + (podnem * TimeSpan.Minute().milliseconds));
            this.ikindija =
                new TimeSpan(
                    ikindijah * TimeSpan.Hour().milliseconds + (ikindijam * TimeSpan.Minute().milliseconds));
            this.aksam =
                new TimeSpan(aksamh * TimeSpan.Hour().milliseconds + (aksamm * TimeSpan.Minute().milliseconds));
            this.jacija =
                new TimeSpan(jacijah * TimeSpan.Hour().milliseconds + (jacijam * TimeSpan.Minute().milliseconds));
        } catch (err) {
        }
    }
}
