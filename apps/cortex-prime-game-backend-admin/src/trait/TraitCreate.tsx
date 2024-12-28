import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TraitSetTitle } from "../traitSet/TraitSetTitle";

export const TraitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bonus" source="bonus" />
        <TextInput label="formula" source="formula" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="traitSet.id"
          reference="TraitSet"
          label="Trait Set"
        >
          <SelectInput optionText={TraitSetTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
