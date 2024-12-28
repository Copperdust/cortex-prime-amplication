import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="seconds" source="seconds" />
        <TextInput label="shouldNotify" source="shouldNotify" />
        <TextInput label="shouldPause" source="shouldPause" />
      </SimpleForm>
    </Edit>
  );
};
