import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WeatherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Weathers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="rainIntensity" source="rainIntensity" />
        <TextField label="rainProbability" source="rainProbability" />
        <TextField label="tempMax" source="tempMax" />
        <TextField label="tempMin" source="tempMin" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
