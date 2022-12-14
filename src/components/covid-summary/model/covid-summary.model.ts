export interface Country {
    ID: string;
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: Number;
    TotalConfirmed: Number;
    NewDeaths: Number;
    TotalDeaths: Number;
    NewRecovered: number;
    TotalRecovered: Number;
    Date: Date;
    Premium: {}
}