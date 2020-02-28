﻿ class Takvim {
    
    drzavniPraznik: string;
    vjerskiPraznik: string;
    vremena: Dan[];
    praznici: Praznik[];

    constructor() {
        this.vremena = Takvim.kreirajVaktiju();
        this.praznici = this.getSviPraznici();
        this.drzavniPraznik = this.getDrzavniPraznik();
        this.vjerskiPraznik = this.getVjerskiPraznik();
    }

    danas(): Dan {
        let now: Date = new Date();

        for (let d of this.vremena) {
            if (d.datum.getMonth() == now.getMonth() && d.datum.getDate() == now.getDate()) {
                return d;
            }
        }
        console.log("nema danas");
        return null;
     }

     getMjesec(mjesec: number): Array<Dan> {
         
         let result = new Array<Dan>();
         console.log(mjesec);
         for (let dan of this.vremena) {
             if (dan.datum.getMonth() === mjesec) {
                 result.push(dan);
                 console.log(dan);
             }
         }
         return result;
     }

    kreirajVaktiju(): Dan[] {
        return null;
    }

    getSviPraznici(): Praznik[] { return null; }

    getDrzavniPraznik(): string { return null; }

    getVjerskiPraznik(): string { return null; }

    static GetSviPraznici(): Praznik[] {
        return
        {
            //Ramazan
            //    new Praznik(Kalendar.Hidzretski, 9, 1, "Prvi dan posta"),
            //new Praznik(Kalendar.Hidzretski, 9, 16, "Lejletul Bedr"),
            //    new Praznik(Kalendar.Hidzretski, 9, 20, "Ulaz u i'tikaf"),
            //    new Praznik(Kalendar.Hidzretski, 9, 26, "Lejletul Kadr"),

            //    new Praznik(Kalendar.Hidzretski, 10, 1, "Ramazanski bajram - prvi dan"),
            //    new Praznik(Kalendar.Hidzretski, 10, 2, "Ramazanski bajram - drugi dan"),
            //    new Praznik(Kalendar.Hidzretski, 10, 3, "Ramazanski bajram - treći dan")
        };


    }

     static kreirajVaktiju() : Dan[] {
         return [
             new Dan(0, 1, 6, 53, 8, 53, 12, 17, 13, 26, 15, 39, 17, 33),
             new Dan(0, 2, 6, 53, 8, 53, 12, 18, 13, 27, 15, 41, 17, 34),
             new Dan(0, 3, 6, 53, 8, 52, 12, 18, 13, 29, 15, 42, 17, 35),
             new Dan(0, 4, 6, 52, 8, 52, 12, 18, 13, 30, 15, 43, 17, 36),
             new Dan(0, 5, 6, 52, 8, 51, 12, 19, 13, 31, 15, 45, 17, 37),
             new Dan(0, 6, 6, 51, 8, 51, 12, 19, 13, 32, 15, 46, 17, 39),
             new Dan(0, 7, 6, 51, 8, 50, 12, 20, 13, 33, 15, 48, 17, 40),
             new Dan(0, 8, 6, 50, 8, 49, 12, 20, 13, 34, 15, 50, 17, 41),
             new Dan(0, 9, 6, 50, 8, 48, 12, 21, 13, 36, 15, 51, 17, 43),
             new Dan(0, 10, 6, 49, 8, 47, 12, 21, 13, 37, 15, 53, 17, 44),
             new Dan(0, 11, 6, 48, 8, 46, 12, 21, 13, 38, 15, 55, 17, 46),
             new Dan(0, 12, 6, 48, 8, 45, 12, 22, 13, 40, 15, 57, 17, 47),
             new Dan(0, 13, 6, 47, 8, 44, 12, 22, 13, 41, 15, 58, 17, 49),
             new Dan(0, 14, 6, 46, 8, 43, 12, 22, 13, 43, 16, 0, 17, 50),
             new Dan(0, 15, 6, 45, 8, 41, 12, 23, 13, 44, 16, 2, 17, 52),
             new Dan(0, 16, 6, 44, 8, 40, 12, 23, 13, 46, 16, 4, 17, 54),
             new Dan(0, 17, 6, 43, 8, 39, 12, 23, 13, 47, 16, 6, 17, 55),
             new Dan(0, 18, 6, 42, 8, 37, 12, 24, 13, 49, 16, 8, 17, 57),
             new Dan(0, 19, 6, 41, 8, 36, 12, 24, 13, 51, 16, 10, 17, 59),
             new Dan(0, 20, 6, 40, 8, 34, 12, 24, 13, 52, 16, 13, 18, 1),
             new Dan(0, 21, 6, 39, 8, 33, 12, 25, 13, 54, 16, 15, 18, 2),
             new Dan(0, 22, 6, 37, 8, 31, 12, 25, 13, 55, 16, 17, 18, 4),
             new Dan(0, 23, 6, 36, 8, 29, 12, 25, 13, 57, 16, 19, 18, 6),
             new Dan(0, 24, 6, 35, 8, 28, 12, 25, 13, 59, 16, 21, 18, 8),
             new Dan(0, 25, 6, 33, 8, 26, 12, 26, 14, 0, 16, 24, 18, 10),
             new Dan(0, 26, 6, 32, 8, 24, 12, 26, 14, 2, 16, 26, 18, 12),
             new Dan(0, 27, 6, 30, 8, 22, 12, 26, 14, 4, 16, 28, 18, 13),
             new Dan(0, 28, 6, 29, 8, 20, 12, 26, 14, 6, 16, 30, 18, 15),
             new Dan(0, 29, 6, 27, 8, 18, 12, 26, 14, 7, 16, 33, 18, 17),
             new Dan(0, 30, 6, 26, 8, 16, 12, 27, 14, 9, 16, 35, 18, 19),
             new Dan(0, 31, 6, 24, 8, 14, 12, 27, 14, 11, 16, 37, 18, 21),
             new Dan(1, 1, 6, 22, 8, 12, 12, 27, 14, 13, 16, 40, 18, 23),
             new Dan(1, 2, 6, 21, 8, 10, 12, 27, 14, 14, 16, 42, 18, 25),
             new Dan(1, 3, 6, 19, 8, 8, 12, 27, 14, 16, 16, 44, 18, 27),
             new Dan(1, 4, 6, 17, 8, 6, 12, 27, 14, 18, 16, 47, 18, 29),
             new Dan(1, 5, 6, 16, 8, 4, 12, 27, 14, 20, 16, 49, 18, 31),
             new Dan(1, 6, 6, 14, 8, 1, 12, 27, 14, 22, 16, 51, 18, 33),
             new Dan(1, 7, 6, 12, 7, 59, 12, 27, 14, 24, 16, 54, 18, 35),
             new Dan(1, 8, 6, 10, 7, 57, 12, 27, 14, 25, 16, 56, 18, 37),
             new Dan(1, 9, 6, 8, 7, 55, 12, 28, 14, 27, 16, 59, 18, 39),
             new Dan(1, 10, 6, 6, 7, 52, 12, 28, 14, 29, 17, 1, 18, 41),
             new Dan(1, 11, 6, 4, 7, 50, 12, 28, 14, 31, 17, 3, 18, 43),
             new Dan(1, 12, 6, 2, 7, 48, 12, 28, 14, 33, 17, 6, 18, 45),
             new Dan(1, 13, 6, 0, 7, 45, 12, 28, 14, 34, 17, 8, 18, 47),
             new Dan(1, 14, 5, 58, 7, 43, 12, 28, 14, 36, 17, 10, 18, 49),
             new Dan(1, 15, 5, 56, 7, 40, 12, 28, 14, 38, 17, 13, 18, 51),
             new Dan(1, 16, 5, 54, 7, 38, 12, 28, 14, 40, 17, 15, 18, 53),
             new Dan(1, 17, 5, 52, 7, 36, 12, 27, 14, 41, 17, 18, 18, 55),
             new Dan(1, 18, 5, 49, 7, 33, 12, 27, 14, 43, 17, 20, 18, 57),
             new Dan(1, 19, 5, 47, 7, 31, 12, 27, 14, 45, 17, 22, 19, 0),
             new Dan(1, 20, 5, 45, 7, 28, 12, 27, 14, 47, 17, 25, 19, 2),
             new Dan(1, 21, 5, 43, 7, 25, 12, 27, 14, 48, 17, 27, 19, 4),
             new Dan(1, 22, 5, 41, 7, 23, 12, 27, 14, 50, 17, 29, 19, 6),
             new Dan(1, 23, 5, 38, 7, 20, 12, 27, 14, 52, 17, 32, 19, 8),
             new Dan(1, 24, 5, 36, 7, 18, 12, 27, 14, 54, 17, 34, 19, 10),
             new Dan(1, 25, 5, 34, 7, 15, 12, 27, 14, 55, 17, 36, 19, 12),
             new Dan(1, 26, 5, 31, 7, 13, 12, 26, 14, 57, 17, 39, 19, 14),
             new Dan(1, 27, 5, 29, 7, 10, 12, 26, 14, 59, 17, 41, 19, 16),
             new Dan(1, 28, 5, 27, 7, 8, 12, 26, 15, 0, 17, 43, 19, 17),
             new Dan(1, 29, 5, 27, 7, 8, 12, 26, 15, 0, 17, 43, 19, 17),
             new Dan(2, 1, 5, 25, 7, 6, 12, 26, 15, 1, 17, 45, 19, 19),
             new Dan(2, 2, 5, 24, 7, 5, 12, 26, 15, 2, 17, 46, 19, 20),
             new Dan(2, 3, 5, 22, 7, 2, 12, 26, 15, 4, 17, 48, 19, 22),
             new Dan(2, 4, 5, 19, 6, 59, 12, 26, 15, 5, 17, 50, 19, 24),
             new Dan(2, 5, 5, 17, 6, 57, 12, 25, 15, 7, 17, 52, 19, 26),
             new Dan(2, 6, 5, 14, 6, 54, 12, 25, 15, 8, 17, 55, 19, 28),
             new Dan(2, 7, 5, 12, 6, 51, 12, 25, 15, 10, 17, 57, 19, 31),
             new Dan(2, 8, 5, 9, 6, 48, 12, 25, 15, 12, 17, 59, 19, 33),
             new Dan(2, 9, 5, 7, 6, 46, 12, 24, 15, 13, 18, 1, 19, 35),
             new Dan(2, 10, 5, 4, 6, 43, 12, 24, 15, 15, 18, 4, 19, 37),
             new Dan(2, 11, 5, 1, 6, 40, 12, 24, 15, 16, 18, 6, 19, 39),
             new Dan(2, 12, 4, 59, 6, 37, 12, 24, 15, 18, 18, 8, 19, 41),
             new Dan(2, 13, 4, 56, 6, 35, 12, 23, 15, 19, 18, 10, 19, 43),
             new Dan(2, 14, 4, 54, 6, 32, 12, 23, 15, 21, 18, 13, 19, 45),
             new Dan(2, 15, 4, 51, 6, 29, 12, 23, 15, 22, 18, 15, 19, 47),
             new Dan(2, 16, 4, 48, 6, 26, 12, 23, 15, 24, 18, 17, 19, 49),
             new Dan(2, 17, 4, 46, 6, 24, 12, 22, 15, 25, 18, 19, 19, 51),
             new Dan(2, 18, 4, 43, 6, 21, 12, 22, 15, 27, 18, 22, 19, 53),
             new Dan(2, 19, 4, 40, 6, 18, 12, 22, 15, 28, 18, 24, 19, 56),
             new Dan(2, 20, 4, 38, 6, 15, 12, 21, 15, 29, 18, 26, 19, 58),
             new Dan(2, 21, 4, 35, 6, 12, 12, 21, 15, 31, 18, 28, 20, 0),
             new Dan(2, 22, 4, 32, 6, 10, 12, 21, 15, 32, 18, 30, 20, 2),
             new Dan(2, 23, 4, 29, 6, 7, 12, 21, 15, 33, 18, 33, 20, 4),
             new Dan(2, 24, 4, 27, 6, 4, 12, 20, 15, 35, 18, 35, 20, 6),
             new Dan(2, 25, 5, 24, 7, 1, 13, 20, 16, 36, 19, 37, 21, 8),
             new Dan(2, 26, 5, 21, 6, 58, 13, 20, 16, 37, 19, 39, 21, 10),
             new Dan(2, 27, 5, 18, 6, 55, 13, 19, 16, 39, 19, 41, 21, 12),
             new Dan(2, 28, 5, 15, 6, 53, 13, 19, 16, 40, 19, 43, 21, 15),
             new Dan(2, 29, 5, 13, 6, 50, 13, 19, 16, 41, 19, 46, 21, 17),
             new Dan(2, 30, 5, 10, 6, 47, 13, 18, 16, 43, 19, 48, 21, 19),
             new Dan(2, 31, 5, 7, 6, 44, 13, 18, 16, 44, 19, 50, 21, 21),
             new Dan(3, 1, 5, 4, 6, 41, 13, 18, 16, 45, 19, 52, 21, 23),
             new Dan(3, 2, 5, 1, 6, 39, 13, 17, 16, 46, 19, 54, 21, 25),
             new Dan(3, 3, 4, 59, 6, 36, 13, 17, 16, 48, 19, 57, 21, 28),
             new Dan(3, 4, 4, 56, 6, 33, 13, 17, 16, 49, 19, 59, 21, 30),
             new Dan(3, 5, 4, 53, 6, 30, 13, 16, 16, 50, 20, 1, 21, 32),
             new Dan(3, 6, 4, 50, 6, 27, 13, 16, 16, 51, 20, 3, 21, 34),
             new Dan(3, 7, 4, 47, 6, 25, 13, 16, 16, 52, 20, 5, 21, 36),
             new Dan(3, 8, 4, 45, 6, 22, 13, 15, 16, 53, 20, 7, 21, 39),
             new Dan(3, 9, 4, 42, 6, 19, 13, 15, 16, 55, 20, 10, 21, 41),
             new Dan(3, 10, 4, 39, 6, 16, 13, 15, 16, 56, 20, 12, 21, 43),
             new Dan(3, 11, 4, 36, 6, 13, 13, 15, 16, 57, 20, 14, 21, 45),
             new Dan(3, 12, 4, 33, 6, 11, 13, 14, 16, 58, 20, 16, 21, 47),
             new Dan(3, 13, 4, 30, 6, 8, 13, 14, 16, 59, 20, 18, 21, 50),
             new Dan(3, 14, 4, 28, 6, 5, 13, 14, 17, 0, 20, 21, 21, 52),
             new Dan(3, 15, 4, 25, 6, 2, 13, 14, 17, 1, 20, 23, 21, 54),
             new Dan(3, 16, 4, 22, 6, 0, 13, 13, 17, 2, 20, 25, 21, 56),
             new Dan(3, 17, 4, 19, 5, 57, 13, 13, 17, 3, 20, 27, 21, 59),
             new Dan(3, 18, 4, 16, 5, 54, 13, 13, 17, 5, 20, 29, 22, 1),
             new Dan(3, 19, 4, 14, 5, 52, 13, 13, 17, 6, 20, 32, 22, 3),
             new Dan(3, 20, 4, 11, 5, 49, 13, 12, 17, 7, 20, 34, 22, 6),
             new Dan(3, 21, 4, 8, 5, 46, 13, 12, 17, 8, 20, 36, 22, 8),
             new Dan(3, 22, 4, 5, 5, 44, 13, 12, 17, 9, 20, 38, 22, 10),
             new Dan(3, 23, 4, 3, 5, 41, 13, 12, 17, 10, 20, 40, 22, 13),
             new Dan(3, 24, 4, 0, 5, 39, 13, 11, 17, 11, 20, 43, 22, 15),
             new Dan(3, 25, 3, 57, 5, 36, 13, 11, 17, 12, 20, 45, 22, 17),
             new Dan(3, 26, 3, 54, 5, 33, 13, 11, 17, 13, 20, 47, 22, 19),
             new Dan(3, 27, 3, 52, 5, 31, 13, 11, 17, 14, 20, 49, 22, 22),
             new Dan(3, 28, 3, 49, 5, 28, 13, 11, 17, 15, 20, 51, 22, 24),
             new Dan(3, 29, 3, 46, 5, 26, 13, 11, 17, 16, 20, 54, 22, 26),
             new Dan(3, 30, 3, 44, 5, 23, 13, 11, 17, 17, 20, 56, 22, 29),
             new Dan(4, 1, 3, 41, 5, 21, 13, 10, 17, 18, 20, 58, 22, 31),
             new Dan(4, 2, 3, 38, 5, 18, 13, 10, 17, 19, 21, 0, 22, 33),
             new Dan(4, 3, 3, 36, 5, 16, 13, 10, 17, 20, 21, 3, 22, 36),
             new Dan(4, 4, 3, 33, 5, 14, 13, 10, 17, 21, 21, 5, 22, 38),
             new Dan(4, 5, 3, 31, 5, 11, 13, 10, 17, 21, 21, 7, 22, 40),
             new Dan(4, 6, 3, 28, 5, 9, 13, 10, 17, 22, 21, 9, 22, 43),
             new Dan(4, 7, 3, 26, 5, 7, 13, 10, 17, 23, 21, 11, 22, 45),
             new Dan(4, 8, 3, 23, 5, 4, 13, 10, 17, 24, 21, 14, 22, 47),
             new Dan(4, 9, 3, 21, 5, 2, 13, 10, 17, 25, 21, 16, 22, 50),
             new Dan(4, 10, 3, 18, 5, 0, 13, 10, 17, 26, 21, 18, 22, 52),
             new Dan(4, 11, 3, 16, 4, 58, 13, 10, 17, 27, 21, 20, 22, 54),
             new Dan(4, 12, 3, 14, 4, 55, 13, 10, 17, 28, 21, 22, 22, 57),
             new Dan(4, 13, 3, 11, 4, 53, 13, 10, 17, 29, 21, 24, 22, 59),
             new Dan(4, 14, 3, 9, 4, 51, 13, 10, 17, 29, 21, 26, 23, 1),
             new Dan(4, 15, 3, 7, 4, 49, 13, 10, 17, 30, 21, 29, 23, 3),
             new Dan(4, 16, 3, 5, 4, 47, 13, 10, 17, 31, 21, 31, 23, 5),
             new Dan(4, 17, 3, 3, 4, 45, 13, 10, 17, 32, 21, 33, 23, 8),
             new Dan(4, 18, 3, 0, 4, 43, 13, 10, 17, 33, 21, 35, 23, 10),
             new Dan(4, 19, 2, 58, 4, 41, 13, 10, 17, 34, 21, 37, 23, 12),
             new Dan(4, 20, 2, 56, 4, 39, 13, 10, 17, 34, 21, 39, 23, 14),
             new Dan(4, 21, 2, 54, 4, 37, 13, 10, 17, 35, 21, 41, 23, 16),
             new Dan(4, 22, 2, 52, 4, 36, 13, 10, 17, 36, 21, 43, 23, 18),
             new Dan(4, 23, 2, 50, 4, 34, 13, 10, 17, 37, 21, 45, 23, 20),
             new Dan(4, 24, 2, 48, 4, 32, 13, 10, 17, 37, 21, 47, 23, 22),
             new Dan(4, 25, 2, 47, 4, 30, 13, 10, 17, 38, 21, 48, 23, 24),
             new Dan(4, 26, 2, 45, 4, 29, 13, 10, 17, 39, 21, 50, 23, 26),
             new Dan(4, 27, 2, 43, 4, 27, 13, 11, 17, 39, 21, 52, 23, 28),
             new Dan(4, 28, 2, 42, 4, 26, 13, 11, 17, 40, 21, 54, 23, 30),
             new Dan(4, 29, 2, 40, 4, 24, 13, 11, 17, 41, 21, 55, 23, 32),
             new Dan(4, 30, 2, 38, 4, 23, 13, 11, 17, 41, 21, 57, 23, 33),
             new Dan(4, 31, 2, 37, 4, 22, 13, 11, 17, 42, 21, 59, 23, 35),
             new Dan(5, 1, 2, 35, 4, 20, 13, 11, 17, 43, 22, 0, 23, 37),
             new Dan(5, 2, 2, 34, 4, 19, 13, 11, 17, 43, 22, 2, 23, 38),
             new Dan(5, 3, 2, 33, 4, 18, 13, 12, 17, 44, 22, 3, 23, 40),
             new Dan(5, 4, 2, 32, 4, 17, 13, 12, 17, 45, 22, 5, 23, 42),
             new Dan(5, 5, 2, 30, 4, 16, 13, 12, 17, 45, 22, 6, 23, 43),
             new Dan(5, 6, 2, 29, 4, 15, 13, 12, 17, 46, 22, 8, 23, 44),
             new Dan(5, 7, 2, 28, 4, 14, 13, 12, 17, 46, 22, 9, 23, 46),
             new Dan(5, 8, 2, 27, 4, 13, 13, 12, 17, 47, 22, 10, 23, 47),
             new Dan(5, 9, 2, 26, 4, 12, 13, 13, 17, 47, 22, 11, 23, 48),
             new Dan(5, 10, 2, 26, 4, 12, 13, 13, 17, 48, 22, 12, 23, 49),
             new Dan(5, 11, 2, 25, 4, 11, 13, 13, 17, 48, 22, 13, 23, 50),
             new Dan(5, 12, 2, 24, 4, 10, 13, 13, 17, 49, 22, 14, 23, 51),
             new Dan(5, 13, 2, 24, 4, 10, 13, 13, 17, 49, 22, 15, 23, 52),
             new Dan(5, 14, 2, 23, 4, 9, 13, 14, 17, 49, 22, 16, 23, 53),
             new Dan(5, 15, 2, 23, 4, 9, 13, 14, 17, 50, 22, 17, 23, 54),
             new Dan(5, 16, 2, 22, 4, 9, 13, 14, 17, 50, 22, 18, 23, 55),
             new Dan(5, 17, 2, 22, 4, 9, 13, 14, 17, 50, 22, 18, 23, 55),
             new Dan(5, 18, 2, 22, 4, 8, 13, 14, 17, 51, 22, 19, 23, 56),
             new Dan(5, 19, 2, 22, 4, 8, 13, 15, 17, 51, 22, 19, 23, 57),
             new Dan(5, 20, 2, 22, 4, 8, 13, 15, 17, 51, 22, 20, 23, 57),
             new Dan(5, 21, 2, 22, 4, 9, 13, 15, 17, 51, 22, 20, 23, 57),
             new Dan(5, 22, 2, 22, 4, 9, 13, 15, 17, 52, 22, 20, 23, 57),
             new Dan(5, 23, 2, 22, 4, 9, 13, 15, 17, 52, 22, 20, 23, 58),
             new Dan(5, 24, 2, 23, 4, 9, 13, 16, 17, 52, 22, 20, 23, 58),
             new Dan(5, 25, 2, 23, 4, 10, 13, 16, 17, 52, 22, 20, 23, 58),
             new Dan(5, 26, 2, 24, 4, 10, 13, 16, 17, 52, 22, 20, 23, 58),
             new Dan(5, 27, 2, 24, 4, 11, 13, 16, 17, 52, 22, 20, 23, 57),
             new Dan(5, 28, 2, 25, 4, 11, 13, 16, 17, 52, 22, 20, 23, 57),
             new Dan(5, 29, 2, 26, 4, 12, 13, 17, 17, 53, 22, 20, 23, 57),
             new Dan(5, 30, 2, 26, 4, 13, 13, 17, 17, 53, 22, 19, 23, 56),
             new Dan(6, 1, 2, 27, 4, 13, 13, 17, 17, 53, 22, 19, 23, 56),
             new Dan(6, 2, 2, 28, 4, 14, 13, 17, 17, 52, 22, 18, 23, 55),
             new Dan(6, 3, 2, 29, 4, 15, 13, 17, 17, 52, 22, 18, 23, 55),
             new Dan(6, 4, 2, 30, 4, 16, 13, 18, 17, 52, 22, 17, 23, 54),
             new Dan(6, 5, 2, 32, 4, 17, 13, 18, 17, 52, 22, 16, 23, 53),
             new Dan(6, 6, 2, 33, 4, 18, 13, 18, 17, 52, 22, 15, 23, 52),
             new Dan(6, 7, 2, 34, 4, 20, 13, 18, 17, 52, 22, 15, 23, 51),
             new Dan(6, 8, 2, 35, 4, 21, 13, 18, 17, 52, 22, 14, 23, 50),
             new Dan(6, 9, 2, 37, 4, 22, 13, 18, 17, 51, 22, 13, 23, 49),
             new Dan(6, 10, 2, 38, 4, 24, 13, 18, 17, 51, 22, 12, 23, 48),
             new Dan(6, 11, 2, 40, 4, 25, 13, 19, 17, 51, 22, 10, 23, 47),
             new Dan(6, 12, 2, 41, 4, 26, 13, 19, 17, 51, 22, 9, 23, 46),
             new Dan(6, 13, 2, 43, 4, 28, 13, 19, 17, 50, 22, 8, 23, 44),
             new Dan(6, 14, 2, 45, 4, 29, 13, 19, 17, 50, 22, 7, 23, 43),
             new Dan(6, 15, 2, 46, 4, 31, 13, 19, 17, 50, 22, 5, 23, 41),
             new Dan(6, 16, 2, 48, 4, 33, 13, 19, 17, 49, 22, 4, 23, 40),
             new Dan(6, 17, 2, 50, 4, 34, 13, 19, 17, 49, 22, 2, 23, 38),
             new Dan(6, 18, 2, 52, 4, 36, 13, 19, 17, 48, 22, 1, 23, 37),
             new Dan(6, 19, 2, 54, 4, 38, 13, 19, 17, 48, 21, 59, 23, 35),
             new Dan(6, 20, 2, 56, 4, 40, 13, 19, 17, 47, 21, 57, 23, 33),
             new Dan(6, 21, 2, 58, 4, 41, 13, 19, 17, 47, 21, 56, 23, 32),
             new Dan(6, 22, 3, 0, 4, 43, 13, 19, 17, 46, 21, 54, 23, 30),
             new Dan(6, 23, 3, 2, 4, 45, 13, 20, 17, 45, 21, 52, 23, 28),
             new Dan(6, 24, 3, 4, 4, 47, 13, 20, 17, 45, 21, 50, 23, 36),
             new Dan(6, 25, 3, 6, 4, 49, 13, 20, 17, 44, 21, 49, 23, 24),
             new Dan(6, 26, 3, 8, 4, 51, 13, 20, 17, 43, 21, 47, 23, 22),
             new Dan(6, 27, 3, 10, 4, 53, 13, 20, 17, 43, 21, 45, 23, 20),
             new Dan(6, 28, 3, 12, 4, 55, 13, 20, 17, 42, 21, 43, 23, 18),
             new Dan(6, 29, 3, 14, 4, 57, 13, 20, 17, 41, 21, 41, 23, 16),
             new Dan(6, 30, 3, 17, 4, 59, 13, 20, 17, 40, 21, 39, 23, 13),
             new Dan(6, 31, 3, 19, 5, 1, 13, 20, 17, 39, 21, 37, 23, 11),
             new Dan(7, 1, 3, 21, 5, 3, 13, 20, 17, 39, 21, 34, 23, 9),
             new Dan(7, 2, 3, 23, 5, 5, 13, 19, 17, 38, 21, 32, 23, 7),
             new Dan(7, 3, 3, 26, 5, 7, 13, 19, 17, 37, 21, 30, 23, 4),
             new Dan(7, 4, 3, 28, 5, 9, 13, 19, 17, 36, 21, 28, 23, 2),
             new Dan(7, 5, 3, 30, 5, 11, 13, 19, 17, 35, 21, 26, 23, 0),
             new Dan(7, 6, 3, 32, 5, 13, 13, 19, 17, 34, 21, 23, 22, 57),
             new Dan(7, 7, 3, 35, 5, 15, 13, 19, 17, 33, 21, 21, 22, 55),
             new Dan(7, 8, 3, 37, 5, 18, 13, 19, 17, 32, 21, 19, 22, 52),
             new Dan(7, 9, 3, 39, 5, 20, 13, 19, 17, 31, 21, 16, 22, 50),
             new Dan(7, 10, 3, 42, 5, 22, 13, 19, 17, 29, 21, 14, 22, 47),
             new Dan(7, 11, 3, 44, 5, 24, 13, 19, 17, 28, 21, 12, 22, 45),
             new Dan(7, 12, 3, 46, 5, 26, 13, 19, 17, 27, 21, 9, 22, 42),
             new Dan(7, 13, 3, 48, 5, 28, 13, 18, 17, 26, 21, 7, 22, 40),
             new Dan(7, 14, 3, 51, 5, 30, 13, 18, 17, 25, 21, 4, 22, 37),
             new Dan(7, 15, 3, 53, 5, 33, 13, 18, 17, 23, 21, 2, 22, 34),
             new Dan(7, 16, 3, 55, 5, 35, 13, 18, 17, 22, 20, 59, 22, 32),
             new Dan(7, 17, 3, 58, 5, 37, 13, 18, 17, 21, 20, 57, 22, 29),
             new Dan(7, 18, 4, 0, 5, 39, 13, 18, 17, 19, 20, 54, 22, 27),
             new Dan(7, 19, 4, 2, 5, 41, 13, 17, 17, 18, 20, 52, 22, 24),
             new Dan(7, 20, 4, 5, 5, 43, 13, 17, 17, 17, 20, 49, 22, 21),
             new Dan(7, 21, 4, 7, 5, 46, 13, 17, 17, 15, 20, 46, 22, 19),
             new Dan(7, 22, 4, 9, 5, 48, 13, 17, 17, 14, 20, 44, 22, 16),
             new Dan(7, 23, 4, 11, 5, 50, 13, 16, 17, 12, 20, 41, 22, 13),
             new Dan(7, 24, 4, 14, 5, 52, 13, 16, 17, 11, 20, 39, 22, 10),
             new Dan(7, 25, 4, 16, 5, 54, 13, 16, 17, 9, 20, 36, 22, 8),
             new Dan(7, 26, 4, 18, 5, 56, 13, 16, 17, 8, 20, 33, 22, 5),
             new Dan(7, 27, 4, 21, 5, 58, 13, 15, 17, 6, 20, 31, 22, 2),
             new Dan(7, 28, 4, 23, 6, 1, 13, 15, 17, 5, 20, 28, 21, 59),
             new Dan(7, 29, 4, 25, 6, 3, 13, 15, 17, 3, 20, 25, 21, 57),
             new Dan(7, 30, 4, 27, 6, 5, 13, 15, 17, 2, 20, 22, 21, 54),
             new Dan(7, 31, 4, 29, 6, 7, 13, 14, 17, 0, 20, 20, 21, 51),
             new Dan(8, 1, 4, 32, 6, 9, 13, 14, 16, 58, 20, 17, 21, 48),
             new Dan(8, 2, 4, 34, 6, 11, 13, 14, 16, 57, 20, 14, 21, 45),
             new Dan(8, 3, 4, 36, 6, 13, 13, 13, 16, 55, 20, 12, 21, 43),
             new Dan(8, 4, 4, 38, 6, 16, 13, 13, 16, 53, 20, 9, 21, 40),
             new Dan(8, 5, 4, 40, 6, 18, 13, 13, 16, 51, 20, 6, 21, 37),
             new Dan(8, 6, 4, 43, 6, 20, 13, 12, 16, 50, 20, 3, 21, 34),
             new Dan(8, 7, 4, 45, 6, 22, 13, 12, 16, 48, 20, 0, 21, 31),
             new Dan(8, 8, 4, 47, 6, 24, 13, 12, 16, 46, 19, 58, 21, 29),
             new Dan(8, 9, 4, 49, 6, 26, 13, 11, 16, 44, 19, 55, 21, 26),
             new Dan(8, 10, 4, 51, 6, 28, 13, 11, 16, 42, 19, 52, 21, 23),
             new Dan(8, 11, 4, 53, 6, 30, 13, 11, 16, 41, 19, 49, 21, 20),
             new Dan(8, 12, 4, 55, 6, 32, 13, 10, 16, 39, 19, 46, 21, 17),
             new Dan(8, 13, 4, 58, 6, 35, 13, 10, 16, 37, 19, 44, 21, 15),
             new Dan(8, 14, 5, 0, 6, 37, 13, 10, 16, 35, 19, 41, 21, 12),
             new Dan(8, 15, 5, 2, 6, 39, 13, 9, 16, 33, 19, 38, 21, 9),
             new Dan(8, 16, 5, 4, 6, 41, 13, 9, 16, 31, 19, 35, 21, 6),
             new Dan(8, 17, 5, 6, 6, 43, 13, 9, 16, 29, 19, 32, 21, 3),
             new Dan(8, 18, 5, 8, 6, 45, 13, 8, 16, 27, 19, 29, 21, 1),
             new Dan(8, 19, 5, 10, 6, 47, 13, 8, 16, 25, 19, 27, 20, 58),
             new Dan(8, 20, 5, 12, 6, 49, 13, 7, 16, 23, 19, 24, 20, 55),
             new Dan(8, 21, 5, 14, 6, 51, 13, 7, 16, 21, 19, 21, 20, 52),
             new Dan(8, 22, 5, 16, 6, 53, 13, 7, 16, 19, 19, 18, 20, 50),
             new Dan(8, 23, 5, 18, 6, 56, 13, 6, 16, 17, 19, 15, 20, 47),
             new Dan(8, 24, 5, 20, 6, 58, 13, 6, 16, 15, 19, 12, 20, 44),
             new Dan(8, 25, 5, 22, 7, 0, 13, 6, 16, 13, 19, 10, 20, 41),
             new Dan(8, 26, 5, 24, 7, 2, 13, 5, 16, 11, 19, 7, 20, 39),
             new Dan(8, 27, 5, 26, 7, 4, 13, 5, 16, 9, 19, 4, 20, 36),
             new Dan(8, 28, 5, 28, 7, 6, 13, 4, 16, 7, 19, 1, 20, 33),
             new Dan(8, 29, 5, 30, 7, 8, 13, 4, 16, 5, 18, 58, 20, 30),
             new Dan(8, 30, 5, 32, 7, 10, 13, 4, 16, 3, 18, 55, 20, 28),
             new Dan(9, 1, 5, 34, 7, 12, 13, 3, 16, 1, 18, 53, 20, 25),
             new Dan(9, 2, 5, 36, 7, 14, 13, 3, 15, 59, 18, 50, 20, 22),
             new Dan(9, 3, 5, 38, 7, 17, 13, 3, 15, 57, 18, 47, 20, 20),
             new Dan(9, 4, 5, 40, 7, 19, 13, 2, 15, 55, 18, 44, 20, 17),
             new Dan(9, 5, 5, 42, 7, 21, 13, 2, 15, 52, 18, 41, 20, 14),
             new Dan(9, 6, 5, 44, 7, 23, 13, 2, 15, 50, 18, 39, 20, 12),
             new Dan(9, 7, 5, 46, 7, 25, 13, 1, 15, 48, 18, 36, 20, 9),
             new Dan(9, 8, 5, 48, 7, 27, 13, 1, 15, 46, 18, 33, 20, 7),
             new Dan(9, 9, 5, 50, 7, 29, 13, 1, 15, 44, 18, 30, 20, 4),
             new Dan(9, 10, 5, 52, 7, 32, 13, 0, 15, 42, 18, 28, 20, 2),
             new Dan(9, 11, 5, 54, 7, 34, 13, 0, 15, 40, 18, 25, 19, 59),
             new Dan(9, 12, 5, 56, 7, 36, 13, 0, 15, 38, 18, 22, 19, 56),
             new Dan(9, 13, 5, 58, 7, 38, 13, 0, 15, 36, 18, 19, 19, 54),
             new Dan(9, 14, 6, 0, 7, 40, 12, 59, 15, 34, 18, 17, 19, 52),
             new Dan(9, 15, 6, 1, 7, 42, 12, 59, 15, 32, 18, 14, 19, 49),
             new Dan(9, 16, 6, 3, 7, 45, 12, 59, 15, 30, 18, 11, 19, 47),
             new Dan(9, 17, 6, 5, 7, 47, 12, 59, 15, 28, 18, 9, 19, 44),
             new Dan(9, 18, 6, 7, 7, 49, 12, 58, 15, 26, 18, 6, 19, 42),
             new Dan(9, 19, 6, 9, 7, 51, 12, 58, 15, 24, 18, 3, 19, 39),
             new Dan(9, 20, 6, 11, 7, 54, 12, 58, 15, 22, 18, 1, 19, 37),
             new Dan(9, 21, 6, 13, 7, 56, 12, 58, 15, 20, 17, 58, 19, 35),
             new Dan(9, 22, 6, 15, 7, 58, 12, 58, 15, 18, 17, 56, 19, 32),
             new Dan(9, 23, 6, 17, 8, 0, 12, 58, 15, 16, 17, 53, 19, 30),
             new Dan(9, 24, 6, 19, 8, 3, 12, 57, 15, 14, 17, 50, 19, 28),
             new Dan(9, 25, 5, 21, 8, 5, 12, 57, 15, 12, 17, 48, 19, 26),
             new Dan(9, 26, 6, 23, 8, 7, 12, 57, 15, 10, 17, 45, 19, 23),
             new Dan(9, 27, 6, 25, 8, 9, 12, 57, 15, 8, 17, 43, 19, 21),
             new Dan(9, 28, 5, 27, 7, 12, 11, 57, 14, 6, 16, 40, 18, 19),
             new Dan(9, 29, 5, 29, 7, 14, 11, 57, 14, 4, 16, 38, 18, 17),
             new Dan(9, 30, 5, 31, 7, 16, 11, 57, 14, 2, 16, 36, 18, 15),
             new Dan(9, 31, 5, 33, 7, 18, 11, 57, 14, 0, 16, 33, 18, 13),
             new Dan(10, 1, 5, 35, 7, 21, 11, 57, 13, 59, 16, 31, 18, 11),
             new Dan(10, 2, 5, 37, 7, 23, 11, 57, 13, 57, 16, 28, 18, 9),
             new Dan(10, 3, 5, 38, 7, 25, 11, 57, 13, 55, 16, 26, 18, 7),
             new Dan(10, 4, 5, 40, 7, 28, 11, 57, 13, 53, 16, 24, 18, 5),
             new Dan(10, 5, 5, 42, 7, 30, 11, 57, 13, 52, 16, 22, 18, 3),
             new Dan(10, 6, 5, 44, 7, 32, 11, 57, 13, 50, 16, 19, 18, 1),
             new Dan(10, 7, 5, 46, 7, 35, 11, 57, 13, 48, 16, 17, 17, 59),
             new Dan(10, 8, 5, 48, 7, 37, 11, 57, 13, 47, 16, 15, 17, 58),
             new Dan(10, 9, 5, 50, 7, 39, 11, 57, 13, 45, 16, 13, 17, 56),
             new Dan(10, 10, 5, 52, 7, 42, 11, 57, 13, 44, 16, 11, 17, 54),
             new Dan(10, 11, 5, 54, 7, 44, 11, 57, 13, 42, 16, 9, 17, 52),
             new Dan(10, 12, 5, 56, 7, 46, 11, 57, 13, 41, 16, 7, 17, 51),
             new Dan(10, 13, 5, 58, 7, 48, 11, 57, 13, 39, 16, 5, 17, 49),
             new Dan(10, 14, 6, 0, 7, 51, 11, 58, 13, 38, 16, 3, 17, 48),
             new Dan(10, 15, 6, 1, 7, 53, 11, 58, 13, 37, 16, 1, 17, 46),
             new Dan(10, 16, 6, 3, 7, 55, 0, 0, 13, 35, 15, 59, 17, 45),
             new Dan(10, 17, 6, 5, 7, 57, 11, 58, 13, 34, 15, 57, 17, 43),
             new Dan(10, 18, 6, 7, 8, 0, 11, 58, 13, 33, 15, 55, 17, 42),
             new Dan(10, 19, 6, 9, 8, 2, 11, 59, 13, 31, 15, 54, 17, 40),
             new Dan(10, 20, 6, 11, 8, 4, 11, 59, 13, 30, 15, 52, 17, 39),
             new Dan(10, 21, 6, 12, 8, 6, 11, 59, 13, 29, 15, 50, 17, 38),
             new Dan(10, 22, 6, 14, 8, 8, 11, 59, 13, 28, 15, 49, 17, 36),
             new Dan(10, 23, 6, 16, 8, 10, 12, 0, 13, 27, 15, 47, 17, 35),
             new Dan(10, 24, 6, 18, 8, 13, 12, 0, 13, 26, 15, 46, 17, 34),
             new Dan(10, 25, 6, 19, 8, 15, 12, 0, 13, 25, 15, 44, 17, 33),
             new Dan(10, 26, 6, 21, 8, 17, 12, 1, 13, 24, 15, 43, 17, 32),
             new Dan(10, 27, 6, 23, 8, 19, 12, 1, 13, 23, 15, 41, 17, 31),
             new Dan(10, 28, 6, 24, 8, 21, 12, 1, 13, 22, 15, 40, 17, 30),
             new Dan(10, 29, 6, 26, 8, 23, 12, 2, 13, 22, 15, 39, 17, 29),
             new Dan(10, 30, 6, 27, 8, 25, 12, 2, 13, 21, 15, 38, 17, 28),
             new Dan(11, 1, 6, 29, 8, 26, 12, 2, 13, 20, 15, 37, 17, 28),
             new Dan(11, 2, 6, 30, 8, 28, 12, 3, 13, 20, 15, 36, 17, 27),
             new Dan(11, 3, 6, 32, 8, 30, 12, 3, 13, 19, 15, 35, 17, 26),
             new Dan(11, 4, 6, 33, 8, 32, 12, 4, 13, 19, 15, 34, 17, 25),
             new Dan(11, 5, 6, 35, 8, 33, 12, 4, 13, 18, 15, 33, 17, 25),
             new Dan(11, 6, 6, 36, 8, 35, 12, 4, 13, 18, 15, 32, 17, 24),
             new Dan(11, 7, 6, 37, 8, 37, 12, 5, 13, 17, 15, 31, 17, 24),
             new Dan(11, 8, 6, 39, 8, 38, 12, 5, 13, 17, 15, 31, 17, 24),
             new Dan(11, 9, 6, 40, 8, 40, 12, 6, 13, 17, 15, 30, 17, 23),
             new Dan(11, 10, 6, 41, 8, 41, 12, 6, 13, 17, 15, 30, 17, 23),
             new Dan(11, 11, 6, 42, 8, 42, 12, 7, 13, 16, 15, 29, 17, 23),
             new Dan(11, 12, 6, 43, 8, 44, 12, 7, 13, 16, 15, 29, 17, 22),
             new Dan(11, 13, 6, 44, 8, 45, 12, 8, 13, 16, 15, 29, 17, 22),
             new Dan(11, 14, 6, 45, 8, 46, 12, 8, 13, 16, 15, 28, 17, 22),
             new Dan(11, 15, 6, 46, 8, 47, 12, 9, 13, 16, 15, 28, 17, 22),
             new Dan(11, 16, 6, 47, 8, 48, 12, 9, 13, 16, 15, 28, 17, 22),
             new Dan(11, 17, 6, 48, 8, 49, 12, 10, 13, 17, 15, 28, 17, 23),
             new Dan(11, 18, 6, 49, 8, 50, 12, 10, 13, 17, 15, 28, 17, 23),
             new Dan(11, 19, 6, 49, 8, 51, 12, 10, 13, 17, 15, 29, 17, 23),
             new Dan(11, 20, 6, 50, 8, 51, 12, 11, 13, 17, 15, 29, 17, 23),
             new Dan(11, 21, 6, 51, 8, 52, 12, 11, 13, 18, 15, 29, 17, 24),
             new Dan(11, 22, 6, 51, 8, 52, 12, 12, 13, 18, 15, 30, 17, 24),
             new Dan(11, 23, 6, 52, 8, 53, 12, 12, 13, 19, 15, 30, 17, 25),
             new Dan(11, 24, 6, 52, 8, 53, 12, 13, 13, 19, 15, 31, 17, 25),
             new Dan(11, 25, 6, 52, 8, 54, 12, 13, 13, 20, 15, 31, 17, 26),
             new Dan(11, 26, 6, 53, 8, 54, 12, 14, 13, 21, 15, 32, 17, 26),
             new Dan(11, 27, 6, 53, 8, 54, 12, 14, 13, 21, 15, 33, 17, 27),
             new Dan(11, 28, 6, 53, 8, 54, 12, 15, 13, 22, 15, 34, 17, 28),
             new Dan(11, 29, 6, 53, 8, 54, 12, 15, 13, 23, 15, 35, 17, 29),
             new Dan(11, 30, 6, 53, 8, 54, 12, 16, 13, 23, 15, 36, 17, 30),
             new Dan(11, 31, 6, 53, 8, 54, 12, 16, 13, 24, 15, 37, 17, 30)
         ];
     }
 }

