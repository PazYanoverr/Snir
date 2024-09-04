import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DESTINATION_TITLE_FIELD } from "./DestinationTitle";
import { VACATION_TITLE_FIELD } from "../vacation/VacationTitle";

export const DestinationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Booking"
          target="destinationId"
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
      </SimpleShowLayout>
    </Show>
  );
};
