import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type TrackerUpdateInput = {
  character?: CharacterWhereUniqueInput | null;
  name?: string | null;
  numberField?: number | null;
};
