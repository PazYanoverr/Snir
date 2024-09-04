import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DestinationTitle } from "../destination/DestinationTitle";
import { VacationTitle } from "../vacation/VacationTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput
          source="destination.id"
          reference="Destination"
          label="Destination"
        >
          <SelectInput optionText={DestinationTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="vacation.id"
          reference="Vacation"
          label="Vacation"
        >
          <SelectInput optionText={VacationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
