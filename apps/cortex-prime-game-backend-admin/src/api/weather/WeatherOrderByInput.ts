import { SortOrder } from "../../util/SortOrder";

export type WeatherOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  rainIntensity?: SortOrder;
  rainProbability?: SortOrder;
  tempMax?: SortOrder;
  tempMin?: SortOrder;
  updatedAt?: SortOrder;
};
