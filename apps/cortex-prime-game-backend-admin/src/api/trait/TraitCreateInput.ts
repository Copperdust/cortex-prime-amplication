import { TraitSetWhereUniqueInput } from "../traitSet/TraitSetWhereUniqueInput";

export type TraitCreateInput = {
  bonus?: string | null;
  formula?: string | null;
  name?: string | null;
  traitSet?: TraitSetWhereUniqueInput | null;
};
