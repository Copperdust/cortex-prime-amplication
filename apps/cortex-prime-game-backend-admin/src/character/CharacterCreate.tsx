import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";
import { TrackerTitle } from "../tracker/TrackerTitle";
import { TraitSetTitle } from "../traitSet/TraitSetTitle";
import { UserTitle } from "../user/UserTitle";

export const CharacterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="image" source="image" />
        <ReferenceArrayInput source="items" reference="Item">
          <SelectArrayInput
            optionText={ItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <SelectInput
          source="statuses"
          label="Statuses"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput source="trackers" reference="Tracker">
          <SelectArrayInput
            optionText={TrackerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="traitSets" reference="TraitSet">
          <SelectArrayInput
            optionText={TraitSetTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
