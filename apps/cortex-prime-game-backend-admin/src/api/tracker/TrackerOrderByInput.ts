import { SortOrder } from "../../util/SortOrder";

export type TrackerOrderByInput = {
  characterId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  numberField?: SortOrder;
  updatedAt?: SortOrder;
};
