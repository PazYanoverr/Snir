import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { VACATION_TITLE_FIELD } from "./VacationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VacationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Booking"
          target="vacationId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <ReferenceField
              label="Destination"
              source="destination.id"
              reference="Destination"
            >
              <TextField source={DESTINATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vacation"
              source="vacation.id"
              reference="Vacation"
            >
              <TextField source={VACATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Destination"
          target="vacationId"
          label="Destinations"
        >
          <Datagrid rowClick="show">
            <TextField label="country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vacation"
              source="vacation.id"
              reference="Vacation"
            >
              <TextField source={VACATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
