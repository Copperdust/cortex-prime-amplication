import { CharacterListRelationFilter } from "../character/CharacterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ItemBonusWhereUniqueInput } from "../itemBonus/ItemBonusWhereUniqueInput";

export type ItemWhereInput = {
  character?: CharacterListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  isPublic?: BooleanNullableFilter;
  itemBonuses?: ItemBonusWhereUniqueInput;
  name?: StringNullableFilter;
};
