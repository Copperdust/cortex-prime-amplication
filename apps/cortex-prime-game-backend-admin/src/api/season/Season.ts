import { Time } from "../time/Time";

export type Season = {
  createdAt: Date;
  id: string;
  time?: Time | null;
  updatedAt: Date;
};
