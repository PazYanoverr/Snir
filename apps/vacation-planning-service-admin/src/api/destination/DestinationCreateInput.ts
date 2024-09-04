import { BookingCreateNestedManyWithoutDestinationsInput } from "./BookingCreateNestedManyWithoutDestinationsInput";
import { VacationWhereUniqueInput } from "../vacation/VacationWhereUniqueInput";

export type DestinationCreateInput = {
  bookings?: BookingCreateNestedManyWithoutDestinationsInput;
  country?: string | null;
  description?: string | null;
  name?: string | null;
  vacation?: VacationWhereUniqueInput | null;
};
