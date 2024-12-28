import { StringFilter } from "../../util/StringFilter";
import { TimeWhereUniqueInput } from "../time/TimeWhereUniqueInput";

export type SeasonWhereInput = {
  id?: StringFilter;
  time?: TimeWhereUniqueInput;
};
