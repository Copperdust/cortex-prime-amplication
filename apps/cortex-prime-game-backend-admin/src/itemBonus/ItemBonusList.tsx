import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemBonusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Item Bonuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="bonus" source="bonus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="formula" source="formula" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBonusReplace" source="isBonusReplace" />
        <BooleanField label="isFormulaReplace" source="isFormulaReplace" />
        <TextField label="traitName" source="traitName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
