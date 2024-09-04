import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { VacationTitle } from "../vacation/VacationTitle";

export const DestinationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="country" source="country" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
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
