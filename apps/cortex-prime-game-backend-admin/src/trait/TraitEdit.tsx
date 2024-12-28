import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TraitSetTitle } from "../traitSet/TraitSetTitle";

export const TraitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
