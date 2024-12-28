import { ItemUpdateManyWithoutCharactersInput } from "./ItemUpdateManyWithoutCharactersInput";
import { TrackerUpdateManyWithoutCharactersInput } from "./TrackerUpdateManyWithoutCharactersInput";
import { TraitSetUpdateManyWithoutCharactersInput } from "./TraitSetUpdateManyWithoutCharactersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CharacterUpdateInput = {
  image?: string | null;
  items?: ItemUpdateManyWithoutCharactersInput;
  name?: string | null;
  statuses?: "Option1" | null;
  trackers?: TrackerUpdateManyWithoutCharactersInput;
  traitSets?: TraitSetUpdateManyWithoutCharactersInput;
  user?: UserWhereUniqueInput | null;
};
