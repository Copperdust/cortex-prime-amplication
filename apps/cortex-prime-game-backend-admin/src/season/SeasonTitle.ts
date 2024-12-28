import { Season as TSeason } from "../api/season/Season";

export const SEASON_TITLE_FIELD = "id";

export const SeasonTitle = (record: TSeason): string => {
  return record.id?.toString() || String(record.id);
};
