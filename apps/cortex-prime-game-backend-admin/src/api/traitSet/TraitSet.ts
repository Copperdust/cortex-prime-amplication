import { Character } from "../character/Character";
import { Trait } from "../trait/Trait";

export type TraitSet = {
  characters?: Array<Character>;
  createdAt: Date;
  id: string;
  name: string | null;
  traits?: Array<Trait>;
  updatedAt: Date;
};
