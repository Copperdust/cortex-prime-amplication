import { Trait as TTrait } from "../api/trait/Trait";

export const TRAIT_TITLE_FIELD = "name";

export const TraitTitle = (record: TTrait): string => {
  return record.name?.toString() || String(record.id);
};
