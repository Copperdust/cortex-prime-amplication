import { WeatherWhereInput } from "./WeatherWhereInput";
import { WeatherOrderByInput } from "./WeatherOrderByInput";

export type WeatherFindManyArgs = {
  where?: WeatherWhereInput;
  orderBy?: Array<WeatherOrderByInput>;
  skip?: number;
  take?: number;
};
