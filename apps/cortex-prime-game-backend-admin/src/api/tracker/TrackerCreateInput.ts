import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type TrackerCreateInput = {
  character?: CharacterWhereUniqueInput | null;
  name?: string | null;
  numberField?: number | null;
};
