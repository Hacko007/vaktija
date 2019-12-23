var Main = /** @class */ (function () {
    function Main() {
        this.takvim = new Takvim();
        this.danas = this.takvim.danas();
        setInterval(this.pokreniVaktiju, 1000);
    }
    Main.prototype.pokreniVaktiju = function () {
        var now = new Date();
        if (this.danas.datum.getMonth() != now.getMonth() || this.danas.datum.getDate() != now.getDate()) {
            this.danas = this.takvim.danas();
        }
        this.danas.setStyle();
    };
    return Main;
}());
//# sourceMappingURL=main.js.map