import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="from" source="fromField" />
        <TextInput label="to" source="to" />
      </SimpleForm>
    </Create>
  );
};
