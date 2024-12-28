import { TimeWhereInput } from "./TimeWhereInput";
import { TimeOrderByInput } from "./TimeOrderByInput";

export type TimeFindManyArgs = {
  where?: TimeWhereInput;
  orderBy?: Array<TimeOrderByInput>;
  skip?: number;
  take?: number;
};
