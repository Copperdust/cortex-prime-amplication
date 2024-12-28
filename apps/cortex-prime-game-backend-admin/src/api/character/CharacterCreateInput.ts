import { ItemCreateNestedManyWithoutCharactersInput } from "./ItemCreateNestedManyWithoutCharactersInput";
import { TrackerCreateNestedManyWithoutCharactersInput } from "./TrackerCreateNestedManyWithoutCharactersInput";
import { TraitSetCreateNestedManyWithoutCharactersInput } from "./TraitSetCreateNestedManyWithoutCharactersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterCreateInput = {
  image?: string | null;
  items?: ItemCreateNestedManyWithoutCharactersInput;
  name?: string | null;
  statuses?: "Option1" | null;
  trackers?: TrackerCreateNestedManyWithoutCharactersInput;
  traitSets?: TraitSetCreateNestedManyWithoutCharactersInput;
  user?: UserWhereUniqueInput | null;
};
