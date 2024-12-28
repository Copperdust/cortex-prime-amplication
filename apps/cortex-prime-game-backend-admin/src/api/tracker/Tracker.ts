import { Character } from "../character/Character";

export type Tracker = {
  character?: Character | null;
  createdAt: Date;
  id: string;
  name: string | null;
  numberField: number | null;
  updatedAt: Date;
};
