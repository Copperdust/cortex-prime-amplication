import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StatusWhereInput = {
  fromField?: StringNullableFilter;
  id?: StringFilter;
  to?: StringNullableFilter;
};
