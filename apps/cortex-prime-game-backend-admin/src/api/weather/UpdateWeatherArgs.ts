import { WeatherWhereUniqueInput } from "./WeatherWhereUniqueInput";
import { WeatherUpdateInput } from "./WeatherUpdateInput";

export type UpdateWeatherArgs = {
  where: WeatherWhereUniqueInput;
  data: WeatherUpdateInput;
};
