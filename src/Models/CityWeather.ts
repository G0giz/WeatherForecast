
class Days {
    public conditions: string;
    public datetime: Date;
    public humidity: number;
    public temp: number;
    public icon: string;
}

export class CityWeather {
    public id: number;
    public days: Days[];

}