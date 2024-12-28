import { WeatherWhereInput } from "./WeatherWhereInput";

export type WeatherListRelationFilter = {
  every?: WeatherWhereInput;
  some?: WeatherWhereInput;
  none?: WeatherWhereInput;
};
