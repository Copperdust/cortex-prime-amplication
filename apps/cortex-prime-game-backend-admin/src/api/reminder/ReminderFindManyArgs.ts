import { ReminderWhereInput } from "./ReminderWhereInput";
import { ReminderOrderByInput } from "./ReminderOrderByInput";

export type ReminderFindManyArgs = {
  where?: ReminderWhereInput;
  orderBy?: Array<ReminderOrderByInput>;
  skip?: number;
  take?: number;
};
