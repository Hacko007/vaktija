﻿

class HijriDate
{
    private _dan: number;
    private _mjesec: string;
    private _mjesecIndex: number;
    private _godina: number;

    get dan(): number { return this._dan; }
    set dan(value: number ){ this._dan = value; }

    get mjesec(): string { return this._mjesec; }
    set mjesec(value: string) { this._mjesec = value }

    get mjesecIndex(): number { return this._mjesecIndex; }
    set mjesecIndex(value: number) { this._mjesecIndex = value }


    get godina(): number { return this._godina; }
    set godina(value: number) { this._godina = value; }


    static writeIslamicDate(today: Date = new Date(),adjustment:number=null): HijriDate {
        var wdNames = new Array("Ahad", "Ithnin", "Thulatha", "Arbaa", "Khams", "Jumuah", "Sabt");
        var iMonthNames = new Array("Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir",
            "Jumadal Ula", "Jumadal Akhira", "Rajab", "Sha'ban",
            "Ramadan", "Shawwal", "Dhul Qa'ada", "Dhul Hijja");
        var result = this.hijriCalendar(today, adjustment);
        result.mjesec = iMonthNames[result.mjesecIndex];
        //var outputIslamicDate = wdNames[iDate[4]] + ", " + iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " AH";
        return result;
    }

    static gmod(n: number, m: number): number {
        return ((n % m) + m) % m;
    }

    static hijriCalendar(today:Date = new Date(), adjust: number = null): HijriDate {
        if (adjust) {
            let adjustmili = 1000 * 60 * 60 * 24 * adjust;
            let todaymili = today.getTime() + adjustmili;
            today = new Date(todaymili);
        }
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
        let m = month + 1;
        let y = year;
        if (m < 3) {
            y -= 1;
            m += 12;
        }

        let a = Math.floor(y / 100.);
        let b = 2 - a + Math.floor(a / 4.);
        if (y < 1583) b = 0;
        if (y == 1582) {
            if (m > 10) b = -10;
            if (m == 10) {
                b = 0;
                if (day > 4) b = -10;
            }
        }

        let jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;

        b = 0;
        if (jd > 2299160) {
            a = Math.floor((jd - 1867216.25) / 36524.25);
            b = 1 + a - Math.floor(a / 4.);
        }
        let bb = jd + b + 1524;
        let cc = Math.floor((bb - 122.1) / 365.25);
        let dd = Math.floor(365.25 * cc);
        let ee = Math.floor((bb - dd) / 30.6001);
        day = (bb - dd) - Math.floor(30.6001 * ee);
        month = ee - 1;
        if (ee > 13) {
            cc += 1;
            month = ee - 13;
        }
        year = cc - 4716;


        let wd = this.gmod(jd + 1, 7) + 1;

        let iyear = 10631. / 30.;
        let epochastro = 1948084;
        let epochcivil = 1948085;

        let shift1 = 8.01 / 60.;

        let z = jd - epochastro;
        let cyc = Math.floor(z / 10631.);
        z = z - 10631 * cyc;
        let j = Math.floor((z - shift1) / iyear);
        let iy = 30 * cyc + j;
        z = z - Math.floor(j * iyear + shift1);
        let im = Math.floor((z + 28.5001) / 29.5);
        if (im == 13) im = 12;
        let id = z - Math.floor(29.5001 * im - 29);

        var result = new HijriDate();
        result.dan = id;
        result.mjesecIndex = im - 1;
        result.godina = iy;
        return result;
        //var myRes = new Array(8);

        //myRes[0] = day; //calculated day (CE)
        //myRes[1] = month - 1; //calculated month (CE)
        //myRes[2] = year; //calculated year (CE)
        //myRes[3] = jd - 1; //julian day number
        //myRes[4] = wd - 1; //weekday number
        //myRes[5] = id; //islamic date
        //myRes[6] = im - 1; //islamic month
        //myRes[7] = iy; //islamic year

        //return myRes;
    }


    
}