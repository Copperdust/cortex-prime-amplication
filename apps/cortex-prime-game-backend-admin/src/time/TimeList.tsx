import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TimeList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Times"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isPaused" source="isPaused" />
        <TextField label="seconds" source="seconds" />
        <TextField label="secondsPerSecond" source="secondsPerSecond" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
