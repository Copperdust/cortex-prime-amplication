import { ItemCreateNestedManyWithoutItemBonusesInput } from "./ItemCreateNestedManyWithoutItemBonusesInput";

export type ItemBonusCreateInput = {
  bonus?: string | null;
  formula?: string | null;
  isBonusReplace?: boolean | null;
  isFormulaReplace?: boolean | null;
  items?: ItemCreateNestedManyWithoutItemBonusesInput;
  traitName?: string | null;
};
