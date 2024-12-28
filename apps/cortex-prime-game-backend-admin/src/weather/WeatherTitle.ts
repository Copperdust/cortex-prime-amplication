import { Weather as TWeather } from "../api/weather/Weather";

export const WEATHER_TITLE_FIELD = "rainIntensity";

export const WeatherTitle = (record: TWeather): string => {
  return record.rainIntensity?.toString() || String(record.id);
};
