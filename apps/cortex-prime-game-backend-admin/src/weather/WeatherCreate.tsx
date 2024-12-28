import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WeatherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="rainIntensity" source="rainIntensity" />
        <TextInput label="rainProbability" source="rainProbability" />
        <TextInput label="tempMax" source="tempMax" />
        <TextInput label="tempMin" source="tempMin" />
      </SimpleForm>
    </Create>
  );
};
