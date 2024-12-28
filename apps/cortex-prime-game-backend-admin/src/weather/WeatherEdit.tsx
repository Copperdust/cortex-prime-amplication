import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WeatherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="rainIntensity" source="rainIntensity" />
        <TextInput label="rainProbability" source="rainProbability" />
        <TextInput label="tempMax" source="tempMax" />
        <TextInput label="tempMin" source="tempMin" />
      </SimpleForm>
    </Edit>
  );
};
