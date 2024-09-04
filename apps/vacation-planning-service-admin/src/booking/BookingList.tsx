import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { VACATION_TITLE_FIELD } from "../vacation/VacationTitle";

export const BookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bookings"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
