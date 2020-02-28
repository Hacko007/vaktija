class Mjesec {
    private _takvim: Takvim;
    private _danas: Dan;

    get takvim(): Takvim {
        if (this._takvim == null) {
            this._takvim = new Takvim();
        }
        return this._takvim;
    }

    get danas(): Dan {
        if (this._danas == null) {
            this._danas = this.takvim.danas();
        } else {
            const now = new Date();
            if (this._danas.datum.getMonth() != now.getMonth() || this._danas.datum.getDate() != now.getDate()) {
                this._danas = this.takvim.danas();
            }
        }
        return this._danas;
    }

    constructor(datum: Date) {
        this.pokreniVaktiju(datum);
    }

    pokreniVaktiju(datum: Date) {
        this.clearOldMonth();
        this.setMjesecHeader(datum);
        
        const vremena = this.takvim.getMjesec(datum.getMonth());
        for (let dan of vremena) {
            this.createRow(dan);
        }
    }

    setMjesecHeader(datum: Date) {
        const satDiv = document.getElementById("datum-header");
        const options = { year: "numeric", month: "long" };
        satDiv.textContent = datum.toLocaleDateString("bs", options);
    }

    setStyle(id: string, sat: string) {
        try {
            const satDiv = document.getElementById(id);
            satDiv.textContent = sat;

        } catch (e) {
        }
    }

   

    createRow(dan:Dan) {
        
        const tr = document.createElement("tr");
        const td11 = this.createTd("datum", "numbers datum", dan.datum.getDate() + "");
        const td12 = this.createTd("datum", "numbers datum", dan.imeDana);
        const td13 = this.createTd("datum", "numbers datum", dan.datumHijri);
        const td2 = this.createTd("zora", "numbers sat",dan.zora.sat());
        const td3 = this.createTd("sabah", "numbers sat",dan.sabah.sat());
        const td4 = this.createTd("podne", "numbers sat",dan.podne.sat());
        const td5 = this.createTd("ikindija", "numbers sat",dan.ikindija.sat());
        const td6 = this.createTd("aksam", "numbers sat",dan.aksam.sat());
        const td7 = this.createTd("jacija", "numbers sat", dan.jacija.sat());

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
        const tab = document.getElementById("tabela_mjesec");
        tab.appendChild(tr);
    }

    createTd(id: string, cls: string , text:string =""): any{
        const td = document.createElement("td");
        td.setAttribute("id", id);
        td.setAttribute("class", cls);
        td.textContent = text;
        return td;
    }

    clearOldMonth() {
        try {
            let tab: HTMLTableElement = <HTMLTableElement>(document.getElementById("tabela_mjesec"));
            const count = tab.rows.length;
            for (let i = 2; i < count; i++) {
                tab.deleteRow(tab.rows.length-1);
            }    
        } catch (e) {
            console.log(e);
        } 
        
    }
}