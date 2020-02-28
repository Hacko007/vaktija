var Mini = /** @class */ (function () {
    function Mini() {
        this.pokreniVaktiju();
    }
    Object.defineProperty(Mini.prototype, "takvim", {
        get: function () {
            if (this._takvim == null) {
                this._takvim = new Takvim();
            }
            return this._takvim;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mini.prototype, "danas", {
        get: function () {
            if (this._danas == null) {
                this._danas = this.takvim.danas();
            }
            else {
                var now = new Date();
                if (this._danas.datum.getMonth() != now.getMonth() || this._danas.datum.getDate() != now.getDate()) {
                    this._danas = this.takvim.danas();
                }
            }
            return this._danas;
        },
        enumerable: true,
        configurable: true
    });
    Mini.prototype.pokreniVaktiju = function () {
        this.danas.setStyle();
        this.updateTime(this);
    };
    Mini.prototype.setStyle = function (id, sat) {
        try {
            var satDiv = document.getElementById(id);
            satDiv.textContent = sat;
        }
        catch (e) {
        }
    };
    Mini.prototype.updateTime = function (main) {
        try {
            main.setStyle("zora", main.danas.zora.sat());
            main.setStyle("sabah", main.danas.sabah.sat());
            main.setStyle("podne", main.danas.podne.sat());
            main.setStyle("ikindija", main.danas.ikindija.sat());
            main.setStyle("aksam", main.danas.aksam.sat());
            main.setStyle("jacija", main.danas.jacija.sat());
        }
        catch (e) {
            console.log(e);
        }
    };
    return Mini;
}());
//# sourceMappingURL=mini.js.map