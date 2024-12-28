import { SortOrder } from "../../util/SortOrder";

export type ItemBonusOrderByInput = {
  bonus?: SortOrder;
  createdAt?: SortOrder;
  formula?: SortOrder;
  id?: SortOrder;
  isBonusReplace?: SortOrder;
  isFormulaReplace?: SortOrder;
  traitName?: SortOrder;
  updatedAt?: SortOrder;
};
