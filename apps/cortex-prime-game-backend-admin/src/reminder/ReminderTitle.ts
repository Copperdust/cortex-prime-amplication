import { Reminder as TReminder } from "../api/reminder/Reminder";

export const REMINDER_TITLE_FIELD = "name";

export const ReminderTitle = (record: TReminder): string => {
  return record.name?.toString() || String(record.id);
};
