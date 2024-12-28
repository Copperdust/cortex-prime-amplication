import { SeasonColor as TSeasonColor } from "../api/seasonColor/SeasonColor";

export const SEASONCOLOR_TITLE_FIELD = "color";

export const SeasonColorTitle = (record: TSeasonColor): string => {
  return record.color?.toString() || String(record.id);
};
