import { SortOrder } from "../../util/SortOrder";

export type StatusOrderByInput = {
  createdAt?: SortOrder;
  fromField?: SortOrder;
  id?: SortOrder;
  to?: SortOrder;
  updatedAt?: SortOrder;
};
