import { Tracker as TTracker } from "../api/tracker/Tracker";

export const TRACKER_TITLE_FIELD = "name";

export const TrackerTitle = (record: TTracker): string => {
  return record.name?.toString() || String(record.id);
};
