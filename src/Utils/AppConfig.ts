class AppConfig {
    public apiKey = "2CBSRBVCSAPCR29MKK95VXV74";

    public readonly weatherForecastUrl = (city: string): string => {
        return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${this.apiKey}`;
    }
}

export const appConfig = new AppConfig();
