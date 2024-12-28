import { TraitWhereInput } from "./TraitWhereInput";
import { TraitOrderByInput } from "./TraitOrderByInput";

export type TraitFindManyArgs = {
  where?: TraitWhereInput;
  orderBy?: Array<TraitOrderByInput>;
  skip?: number;
  take?: number;
};
