import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const SeasonColorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[
            { label: "Dawn", value: "Dawn" },
            { label: "Noon", value: "Noon" },
            { label: "Dusk", value: "Dusk" },
            { label: "Night", value: "Night" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
