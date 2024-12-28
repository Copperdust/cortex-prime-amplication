import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type ItemBonusWhereInput = {
  bonus?: StringNullableFilter;
  formula?: StringNullableFilter;
  id?: StringFilter;
  isBonusReplace?: BooleanNullableFilter;
  isFormulaReplace?: BooleanNullableFilter;
  items?: ItemListRelationFilter;
  traitName?: StringNullableFilter;
};
