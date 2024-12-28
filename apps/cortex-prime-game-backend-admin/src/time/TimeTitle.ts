import { Time as TTime } from "../api/time/Time";

export const TIME_TITLE_FIELD = "seconds";

export const TimeTitle = (record: TTime): string => {
  return record.seconds?.toString() || String(record.id);
};
