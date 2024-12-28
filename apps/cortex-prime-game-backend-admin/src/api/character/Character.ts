import { Item } from "../item/Item";
import { Tracker } from "../tracker/Tracker";
import { TraitSet } from "../traitSet/TraitSet";
import { User } from "../user/User";

export type Character = {
  createdAt: Date;
  id: string;
  image: string | null;
  items?: Array<Item>;
  name: string | null;
  statuses?: "Option1" | null;
  trackers?: Array<Tracker>;
  traitSets?: Array<TraitSet>;
  updatedAt: Date;
  user?: User | null;
};
