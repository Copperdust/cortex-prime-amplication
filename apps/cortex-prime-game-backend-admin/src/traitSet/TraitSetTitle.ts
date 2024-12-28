import { TraitSet as TTraitSet } from "../api/traitSet/TraitSet";

export const TRAITSET_TITLE_FIELD = "name";

export const TraitSetTitle = (record: TTraitSet): string => {
  return record.name?.toString() || String(record.id);
};
