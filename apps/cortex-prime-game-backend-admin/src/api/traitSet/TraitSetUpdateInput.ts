import { CharacterUpdateManyWithoutTraitSetsInput } from "./CharacterUpdateManyWithoutTraitSetsInput";
import { TraitUpdateManyWithoutTraitSetsInput } from "./TraitUpdateManyWithoutTraitSetsInput";

export type TraitSetUpdateInput = {
  characters?: CharacterUpdateManyWithoutTraitSetsInput;
  name?: string | null;
  traits?: TraitUpdateManyWithoutTraitSetsInput;
};
