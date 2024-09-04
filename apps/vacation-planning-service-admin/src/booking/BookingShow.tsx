import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { VACATION_TITLE_FIELD } from "../vacation/VacationTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
