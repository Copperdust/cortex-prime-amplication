import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ITEMBONUS_TITLE_FIELD } from "../itemBonus/ItemBonusTitle";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Items"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <BooleanField label="isPublic" source="isPublic" />
        <ReferenceField
          label="ItemBonuses"
          source="itembonus.id"
          reference="ItemBonus"
        >
          <TextField source={ITEMBONUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
