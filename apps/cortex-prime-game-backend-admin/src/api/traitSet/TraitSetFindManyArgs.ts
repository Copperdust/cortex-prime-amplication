import { TraitSetWhereInput } from "./TraitSetWhereInput";
import { TraitSetOrderByInput } from "./TraitSetOrderByInput";

export type TraitSetFindManyArgs = {
  where?: TraitSetWhereInput;
  orderBy?: Array<TraitSetOrderByInput>;
  skip?: number;
  take?: number;
};
