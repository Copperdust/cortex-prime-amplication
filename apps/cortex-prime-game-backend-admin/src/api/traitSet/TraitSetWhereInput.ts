import { CharacterListRelationFilter } from "../character/CharacterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TraitListRelationFilter } from "../trait/TraitListRelationFilter";

export type TraitSetWhereInput = {
  characters?: CharacterListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  traits?: TraitListRelationFilter;
};
