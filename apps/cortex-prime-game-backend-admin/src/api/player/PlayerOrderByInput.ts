import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
