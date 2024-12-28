import { Season } from "../season/Season";

export type Time = {
  createdAt: Date;
  id: string;
  isPaused: boolean | null;
  seasons?: Array<Season>;
  seconds: string | null;
  secondsPerSecond: string | null;
  updatedAt: Date;
};
