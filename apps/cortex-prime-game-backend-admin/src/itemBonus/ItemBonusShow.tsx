import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ITEMBONUS_TITLE_FIELD } from "./ItemBonusTitle";

export const ItemBonusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bonus" source="bonus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="formula" source="formula" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBonusReplace" source="isBonusReplace" />
        <BooleanField label="isFormulaReplace" source="isFormulaReplace" />
        <TextField label="traitName" source="traitName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Item"
          target="itemBonusesId"
          label="Items"
        >
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
