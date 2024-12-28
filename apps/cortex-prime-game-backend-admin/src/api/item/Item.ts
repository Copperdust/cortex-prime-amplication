import { Character } from "../character/Character";
import { ItemBonus } from "../itemBonus/ItemBonus";

export type Item = {
  character?: Array<Character>;
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  isPublic: boolean | null;
  itemBonuses?: ItemBonus | null;
  name: string | null;
  updatedAt: Date;
};
