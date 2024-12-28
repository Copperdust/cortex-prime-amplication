import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="from" source="fromField" />
        <TextInput label="to" source="to" />
      </SimpleForm>
    </Edit>
  );
};
