import { SortOrder } from "../../util/SortOrder";

export type ReminderOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  seconds?: SortOrder;
  shouldNotify?: SortOrder;
  shouldPause?: SortOrder;
  updatedAt?: SortOrder;
};
