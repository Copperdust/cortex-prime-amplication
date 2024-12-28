import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { TrackerListRelationFilter } from "../tracker/TrackerListRelationFilter";
import { TraitSetListRelationFilter } from "../traitSet/TraitSetListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterWhereInput = {
  id?: StringFilter;
  image?: StringNullableFilter;
  items?: ItemListRelationFilter;
  name?: StringNullableFilter;
  statuses?: "Option1";
  trackers?: TrackerListRelationFilter;
  traitSets?: TraitSetListRelationFilter;
  user?: UserWhereUniqueInput;
};
