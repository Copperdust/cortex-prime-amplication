import { Item } from "../item/Item";

export type ItemBonus = {
  bonus: string | null;
  createdAt: Date;
  formula: string | null;
  id: string;
  isBonusReplace: boolean | null;
  isFormulaReplace: boolean | null;
  items?: Array<Item>;
  traitName: string | null;
  updatedAt: Date;
};
