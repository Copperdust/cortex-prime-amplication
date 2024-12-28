import { ItemUpdateManyWithoutItemBonusesInput } from "./ItemUpdateManyWithoutItemBonusesInput";

export type ItemBonusUpdateInput = {
  bonus?: string | null;
  formula?: string | null;
  isBonusReplace?: boolean | null;
  isFormulaReplace?: boolean | null;
  items?: ItemUpdateManyWithoutItemBonusesInput;
  traitName?: string | null;
};
