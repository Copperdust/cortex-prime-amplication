import { SeasonColorWhereInput } from "./SeasonColorWhereInput";
import { SeasonColorOrderByInput } from "./SeasonColorOrderByInput";

export type SeasonColorFindManyArgs = {
  where?: SeasonColorWhereInput;
  orderBy?: Array<SeasonColorOrderByInput>;
  skip?: number;
  take?: number;
};
