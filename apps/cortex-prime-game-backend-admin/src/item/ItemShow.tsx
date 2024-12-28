import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { ITEMBONUS_TITLE_FIELD } from "../itemBonus/ItemBonusTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
