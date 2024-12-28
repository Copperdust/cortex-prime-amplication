import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CharacterTitle } from "../character/CharacterTitle";

export const TrackerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
