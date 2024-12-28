import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TRAITSET_TITLE_FIELD } from "../traitSet/TraitSetTitle";

export const TraitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
