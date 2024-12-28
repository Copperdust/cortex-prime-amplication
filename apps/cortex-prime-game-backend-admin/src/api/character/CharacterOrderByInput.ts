import { SortOrder } from "../../util/SortOrder";

export type CharacterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  statuses?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
