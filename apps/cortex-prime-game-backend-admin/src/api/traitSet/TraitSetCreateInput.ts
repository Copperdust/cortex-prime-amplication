import { CharacterCreateNestedManyWithoutTraitSetsInput } from "./CharacterCreateNestedManyWithoutTraitSetsInput";
import { TraitCreateNestedManyWithoutTraitSetsInput } from "./TraitCreateNestedManyWithoutTraitSetsInput";

export type TraitSetCreateInput = {
  characters?: CharacterCreateNestedManyWithoutTraitSetsInput;
  name?: string | null;
  traits?: TraitCreateNestedManyWithoutTraitSetsInput;
};
