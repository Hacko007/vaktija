var Mjesec = /** @class */ (function () {
    function Mjesec(datum) {
        this.pokreniVaktiju(datum);
    }
    Object.defineProperty(Mjesec.prototype, "takvim", {
        get: function () {
            if (this._takvim == null) {
                this._takvim = new Takvim();
            }
            return this._takvim;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mjesec.prototype, "danas", {
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
    Mjesec.prototype.pokreniVaktiju = function (datum) {
        this.clearOldMonth();
        this.setMjesecHeader(datum);
        var vremena = this.takvim.getMjesec(datum.getMonth());
        for (var _i = 0, vremena_1 = vremena; _i < vremena_1.length; _i++) {
            var dan = vremena_1[_i];
            this.createRow(dan);
        }
    };
    Mjesec.prototype.setMjesecHeader = function (datum) {
        var satDiv = document.getElementById("datum-header");
        var options = { year: "numeric", month: "long" };
        satDiv.textContent = datum.toLocaleDateString("bs", options);
    };
    Mjesec.prototype.setStyle = function (id, sat) {
        try {
            var satDiv = document.getElementById(id);
            satDiv.textContent = sat;
        }
        catch (e) {
        }
    };
    Mjesec.prototype.createRow = function (dan) {
        var tr = document.createElement("tr");
        var td11 = this.createTd("datum", "numbers datum", dan.datum.getDate() + "");
        var td12 = this.createTd("datum", "numbers datum", dan.imeDana);
        var td13 = this.createTd("datum", "numbers datum", dan.datumHijri);
        var td2 = this.createTd("zora", "numbers sat", dan.zora.sat());
        var td3 = this.createTd("sabah", "numbers sat", dan.sabah.sat());
        var td4 = this.createTd("podne", "numbers sat", dan.podne.sat());
        var td5 = this.createTd("ikindija", "numbers sat", dan.ikindija.sat());
        var td6 = this.createTd("aksam", "numbers sat", dan.aksam.sat());
        var td7 = this.createTd("jacija", "numbers sat", dan.jacija.sat());
        if (dan.datum.getDay() === 5) {
            tr.setAttribute("class", "dzuma");
        }
        tr.appendChild(td11);
        tr.appendChild(td12);
        tr.appendChild(td13);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        var tab = document.getElementById("tabela_mjesec");
        tab.appendChild(tr);
    };
    Mjesec.prototype.createTd = function (id, cls, text) {
        if (text === void 0) { text = ""; }
        var td = document.createElement("td");
        td.setAttribute("id", id);
        td.setAttribute("class", cls);
        td.textContent = text;
        return td;
    };
    Mjesec.prototype.clearOldMonth = function () {
        try {
            var tab = (document.getElementById("tabela_mjesec"));
            var count = tab.rows.length;
            for (var i = 2; i < count; i++) {
                tab.deleteRow(tab.rows.length - 1);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    return Mjesec;
}());
//# sourceMappingURL=mjesec.js.map