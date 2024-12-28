import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TraitSetWhereUniqueInput } from "../traitSet/TraitSetWhereUniqueInput";

export type TraitWhereInput = {
  bonus?: StringNullableFilter;
  formula?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  traitSet?: TraitSetWhereUniqueInput;
};
