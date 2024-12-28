import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PlayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <TextInput label="image" source="image" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
