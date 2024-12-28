import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  isPublic?: SortOrder;
  itemBonusesId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
