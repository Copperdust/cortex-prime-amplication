import { TraitSet } from "../traitSet/TraitSet";

export type Trait = {
  bonus: string | null;
  createdAt: Date;
  formula: string | null;
  id: string;
  name: string | null;
  traitSet?: TraitSet | null;
  updatedAt: Date;
};
