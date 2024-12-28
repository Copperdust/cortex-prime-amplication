import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRAITSET_TITLE_FIELD } from "../traitSet/TraitSetTitle";

export const TraitList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Traits"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="bonus" source="bonus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="formula" source="formula" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="Trait Set"
          source="traitset.id"
          reference="TraitSet"
        >
          <TextField source={TRAITSET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
