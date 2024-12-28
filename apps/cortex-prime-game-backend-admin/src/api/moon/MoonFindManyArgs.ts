import { MoonWhereInput } from "./MoonWhereInput";
import { MoonOrderByInput } from "./MoonOrderByInput";

export type MoonFindManyArgs = {
  where?: MoonWhereInput;
  orderBy?: Array<MoonOrderByInput>;
  skip?: number;
  take?: number;
};
