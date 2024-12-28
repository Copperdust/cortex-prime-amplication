import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { SeasonTitle } from "../season/SeasonTitle";

export const TimeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isPaused" source="isPaused" />
        <ReferenceArrayInput source="seasons" reference="Season">
          <SelectArrayInput
            optionText={SeasonTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="seconds" source="seconds" />
        <TextInput label="secondsPerSecond" source="secondsPerSecond" />
      </SimpleForm>
    </Create>
  );
};
