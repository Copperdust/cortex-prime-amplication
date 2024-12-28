import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { SeasonListRelationFilter } from "../season/SeasonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TimeWhereInput = {
  id?: StringFilter;
  isPaused?: BooleanNullableFilter;
  seasons?: SeasonListRelationFilter;
  seconds?: StringNullableFilter;
  secondsPerSecond?: StringNullableFilter;
};
