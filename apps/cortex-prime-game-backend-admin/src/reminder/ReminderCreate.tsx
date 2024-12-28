import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReminderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="seconds" source="seconds" />
        <TextInput label="shouldNotify" source="shouldNotify" />
        <TextInput label="shouldPause" source="shouldPause" />
      </SimpleForm>
    </Create>
  );
};
