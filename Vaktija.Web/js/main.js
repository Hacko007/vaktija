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
                if (this._danas.datum.getMonth() != now.getMonth() || this._danas.datum.getDate() != now.getDate()) {
                    this._danas = this.takvim.danas();
                }
            }
            return this._danas;
        },
        enumerable: true,
        configurable: true
    });
    Main.prototype.pokreniVaktiju = function () {
        //while (true) {
        // setTimeout(null, 1000);
        this.danas.setStyle();
        console.log(this.danas.zoraStyle);
        //}        
    };
    return Main;
}());
//# sourceMappingURL=main.js.map