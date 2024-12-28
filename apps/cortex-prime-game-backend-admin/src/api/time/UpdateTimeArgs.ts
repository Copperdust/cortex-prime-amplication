import { TimeWhereUniqueInput } from "./TimeWhereUniqueInput";
import { TimeUpdateInput } from "./TimeUpdateInput";

export type UpdateTimeArgs = {
  where: TimeWhereUniqueInput;
  data: TimeUpdateInput;
};
