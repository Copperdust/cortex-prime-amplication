import { Moon as TMoon } from "../api/moon/Moon";

export const MOON_TITLE_FIELD = "name";

export const MoonTitle = (record: TMoon): string => {
  return record.name?.toString() || String(record.id);
};
