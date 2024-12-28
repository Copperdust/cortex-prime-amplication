import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TrackerWhereInput = {
  character?: CharacterWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  numberField?: IntNullableFilter;
};
