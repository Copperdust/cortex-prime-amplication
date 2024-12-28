import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeTitle } from "../time/TimeTitle";

export const SeasonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="time.id" reference="Time" label="Time">
          <SelectInput optionText={TimeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
