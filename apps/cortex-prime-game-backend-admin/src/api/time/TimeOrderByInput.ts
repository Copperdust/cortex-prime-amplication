import { SortOrder } from "../../util/SortOrder";

export type TimeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isPaused?: SortOrder;
  seconds?: SortOrder;
  secondsPerSecond?: SortOrder;
  updatedAt?: SortOrder;
};
