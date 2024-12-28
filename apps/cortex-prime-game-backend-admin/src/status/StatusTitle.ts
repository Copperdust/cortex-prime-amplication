import { Status as TStatus } from "../api/status/Status";

export const STATUS_TITLE_FIELD = "fromField";

export const StatusTitle = (record: TStatus): string => {
  return record.fromField?.toString() || String(record.id);
};
