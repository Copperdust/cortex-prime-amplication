import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SeasonColorWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  typeField?: "Dawn" | "Noon" | "Dusk" | "Night";
};
