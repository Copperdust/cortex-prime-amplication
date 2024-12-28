import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MoonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <TextInput label="name" source="name" />
        <TextInput label="period" source="period" />
        <TextInput label="secondStart" source="secondStart" />
      </SimpleForm>
    </Edit>
  );
};
