import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MoonWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  period?: StringNullableFilter;
  secondStart?: StringNullableFilter;
};
