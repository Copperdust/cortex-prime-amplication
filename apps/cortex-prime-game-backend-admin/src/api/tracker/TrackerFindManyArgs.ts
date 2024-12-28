import { TrackerWhereInput } from "./TrackerWhereInput";
import { TrackerOrderByInput } from "./TrackerOrderByInput";

export type TrackerFindManyArgs = {
  where?: TrackerWhereInput;
  orderBy?: Array<TrackerOrderByInput>;
  skip?: number;
  take?: number;
};
