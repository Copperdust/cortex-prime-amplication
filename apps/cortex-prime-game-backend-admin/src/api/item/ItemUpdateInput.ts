import { CharacterUpdateManyWithoutItemsInput } from "./CharacterUpdateManyWithoutItemsInput";
import { ItemBonusWhereUniqueInput } from "../itemBonus/ItemBonusWhereUniqueInput";

export type ItemUpdateInput = {
  character?: CharacterUpdateManyWithoutItemsInput;
  description?: string | null;
  image?: string | null;
  isPublic?: boolean | null;
  itemBonuses?: ItemBonusWhereUniqueInput | null;
  name?: string | null;
};
