import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TIME_TITLE_FIELD } from "./TimeTitle";

export const TimeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isPaused" source="isPaused" />
        <TextField label="seconds" source="seconds" />
        <TextField label="secondsPerSecond" source="secondsPerSecond" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Season" target="timeId" label="Seasons">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Time" source="time.id" reference="Time">
              <TextField source={TIME_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
