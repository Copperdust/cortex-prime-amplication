import { ItemBonus as TItemBonus } from "../api/itemBonus/ItemBonus";

export const ITEMBONUS_TITLE_FIELD = "traitName";

export const ItemBonusTitle = (record: TItemBonus): string => {
  return record.traitName?.toString() || String(record.id);
};
