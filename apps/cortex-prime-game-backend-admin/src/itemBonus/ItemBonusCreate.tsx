import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";

export const ItemBonusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bonus" source="bonus" />
        <TextInput label="formula" source="formula" />
        <BooleanInput label="isBonusReplace" source="isBonusReplace" />
        <BooleanInput label="isFormulaReplace" source="isFormulaReplace" />
        <ReferenceArrayInput source="items" reference="Item">
          <SelectArrayInput
            optionText={ItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="traitName" source="traitName" />
      </SimpleForm>
    </Create>
  );
};
