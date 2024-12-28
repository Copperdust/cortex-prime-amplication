import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const SeasonColorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
