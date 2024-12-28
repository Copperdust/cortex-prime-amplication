import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReminderWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  seconds?: StringNullableFilter;
  shouldNotify?: StringNullableFilter;
  shouldPause?: StringNullableFilter;
};
