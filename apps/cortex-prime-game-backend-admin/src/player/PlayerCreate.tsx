import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PlayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <TextInput label="image" source="image" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
