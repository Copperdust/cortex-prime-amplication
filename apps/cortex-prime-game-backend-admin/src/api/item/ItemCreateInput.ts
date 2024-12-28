import { CharacterCreateNestedManyWithoutItemsInput } from "./CharacterCreateNestedManyWithoutItemsInput";
import { ItemBonusWhereUniqueInput } from "../itemBonus/ItemBonusWhereUniqueInput";

export type ItemCreateInput = {
  character?: CharacterCreateNestedManyWithoutItemsInput;
  description?: string | null;
  image?: string | null;
  isPublic?: boolean | null;
  itemBonuses?: ItemBonusWhereUniqueInput | null;
  name?: string | null;
};
