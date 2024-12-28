import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CharacterTitle } from "../character/CharacterTitle";

export const TrackerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="character.id"
          reference="Character"
          label="Character"
        >
          <SelectInput optionText={CharacterTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="number" source="numberField" />
      </SimpleForm>
    </Create>
  );
};