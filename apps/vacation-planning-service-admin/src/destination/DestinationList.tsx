import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VACATION_TITLE_FIELD } from "../vacation/VacationTitle";

export const DestinationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Destinations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
