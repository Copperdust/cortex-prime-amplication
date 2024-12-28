import { SeasonCreateNestedManyWithoutTimesInput } from "./SeasonCreateNestedManyWithoutTimesInput";

export type TimeCreateInput = {
  isPaused?: boolean | null;
  seasons?: SeasonCreateNestedManyWithoutTimesInput;
  seconds?: string | null;
  secondsPerSecond?: string | null;
};
