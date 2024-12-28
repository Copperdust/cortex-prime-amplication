import { TimeWhereInput } from "./TimeWhereInput";

export type TimeListRelationFilter = {
  every?: TimeWhereInput;
  some?: TimeWhereInput;
  none?: TimeWhereInput;
};
