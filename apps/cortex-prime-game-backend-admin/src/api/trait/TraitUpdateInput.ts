import { TraitSetWhereUniqueInput } from "../traitSet/TraitSetWhereUniqueInput";

export type TraitUpdateInput = {
  bonus?: string | null;
  formula?: string | null;
  name?: string | null;
  traitSet?: TraitSetWhereUniqueInput | null;
};
