var Main = /** @class */ (function () {
    function Main() {
        this.pokreniVaktiju();
    }
    Object.defineProperty(Main.prototype, "takvim", {
        get: function () {
            if (this._takvim == null) {
                this._takvim = new Takvim();
            }
            return this._takvim;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "danas", {
        get: function () {
            if (this._danas == null) {
                this._danas = this.takvim.danas();
            }
            else {
                var now = new Date();
                if (this._danas.datum.getMonth() !== now.getMonth() || this._danas.datum.getDate() !== now.getDate()) {
                    this._danas = this.takvim.danas();
                }
            }
            return this._danas;
        },
        enumerable: true,
        configurable: true
    });
    Main.prototype.pokreniVaktiju = function () {
        this.danas.setStyle();
        setInterval(this.updateTime, 1000, this);
    };
    Main.prototype.setStyle = function (id, sat, className) {
        try {
            var satDiv = document.getElementById(id);
            satDiv.textContent = sat;
            var red = document.getElementById(id + "-red");
            red.className = className;
        }
        catch (e) {
        }
    };
    Main.prototype.updateTime = function (main) {
        try {
            var now = new Date();
            var sad = new TimeSpan();
            sad.setTime(now.getHours(), now.getMinutes(), now.getSeconds());
            ;
            var sat = document.getElementById("sat");
            sat.textContent = sad.sat();
            main.setStyle("zora", main.danas.zora.sat(), main.danas.zoraStyle);
            main.setStyle("sabah", main.danas.sabah.sat(), main.danas.sabahStyle);
            main.setStyle("podne", main.danas.podne.sat(), main.danas.podneStyle);
            main.setStyle("ikindija", main.danas.ikindija.sat(), main.danas.ikindijaStyle);
            main.setStyle("aksam", main.danas.aksam.sat(), main.danas.aksamStyle);
            main.setStyle("jacija", main.danas.jacija.sat(), main.danas.jacijaStyle);
            var options = { weekday: "long", year: "numeric", month: "numeric", day: "numeric" };
            var d = document.getElementById("datum");
            d.textContent = now.toLocaleDateString("hr", options);
        }
        catch (e) {
            console.log(e);
        }
    };
    return Main;
}());
//# sourceMappingURL=main.js.map