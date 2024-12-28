import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CharacterTitle } from "../character/CharacterTitle";
import { ItemBonusTitle } from "../itemBonus/ItemBonusTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="character" reference="Character">
          <SelectArrayInput
            optionText={CharacterTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="image" source="image" />
        <BooleanInput label="isPublic" source="isPublic" />
        <ReferenceInput
          source="itemBonuses.id"
          reference="ItemBonus"
          label="ItemBonuses"
        >
          <SelectInput optionText={ItemBonusTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
