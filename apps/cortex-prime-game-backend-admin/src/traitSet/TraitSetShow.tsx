import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRAITSET_TITLE_FIELD } from "./TraitSetTitle";

export const TraitSetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Trait"
          target="traitSetId"
          label="Traits"
        >
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
