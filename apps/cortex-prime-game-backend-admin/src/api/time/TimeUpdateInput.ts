import { SeasonUpdateManyWithoutTimesInput } from "./SeasonUpdateManyWithoutTimesInput";

export type TimeUpdateInput = {
  isPaused?: boolean | null;
  seasons?: SeasonUpdateManyWithoutTimesInput;
  seconds?: string | null;
  secondsPerSecond?: string | null;
};
