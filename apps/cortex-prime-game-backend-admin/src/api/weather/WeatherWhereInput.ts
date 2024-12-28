import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WeatherWhereInput = {
  id?: StringFilter;
  rainIntensity?: StringNullableFilter;
  rainProbability?: StringNullableFilter;
  tempMax?: StringNullableFilter;
  tempMin?: StringNullableFilter;
};
