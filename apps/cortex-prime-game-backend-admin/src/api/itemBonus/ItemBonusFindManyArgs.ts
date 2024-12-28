import { ItemBonusWhereInput } from "./ItemBonusWhereInput";
import { ItemBonusOrderByInput } from "./ItemBonusOrderByInput";

export type ItemBonusFindManyArgs = {
  where?: ItemBonusWhereInput;
  orderBy?: Array<ItemBonusOrderByInput>;
  skip?: number;
  take?: number;
};
