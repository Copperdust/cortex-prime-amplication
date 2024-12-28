import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeTitle } from "../time/TimeTitle";

export const SeasonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="time.id" reference="Time" label="Time">
          <SelectInput optionText={TimeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
