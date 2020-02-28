 class Praznik {
    kalendar: Kalendar;
    dan: number;
    mjesec: number;
    opis: string;

    constructor(kalendar: Kalendar, mjesec: number, dan: number, opis: string) {
        this.kalendar = kalendar;
        this.dan = dan;
        this.opis = opis;
    }

    JeliOvoDanas(kalendar: Kalendar): boolean {
        try {
            let now: Date = new Date();
            if (kalendar == Kalendar.Georgianski)
                return this.kalendar == kalendar &&
                    now.getDate() == this.dan &&
                    now.getMonth() == this.mjesec;


            //if (int.TryParse(DateTime.Today.ToString("dd", new CultureInfo("ar-SA")), out int dan)
            //    && int.TryParse(DateTime.Today.ToString("MM", new CultureInfo("ar-SA")), out int mjesc)) {
            //    return dan == Dan &&
            //        mjesc == Mjesec;
            //}
        }
        catch (err) {}
        return false;
    }
}

enum Kalendar {
    Georgianski,
    Hidzretski
}