import { BookingUpdateManyWithoutDestinationsInput } from "./BookingUpdateManyWithoutDestinationsInput";
import { VacationWhereUniqueInput } from "../vacation/VacationWhereUniqueInput";

export type DestinationUpdateInput = {
  bookings?: BookingUpdateManyWithoutDestinationsInput;
  country?: string | null;
  description?: string | null;
  name?: string | null;
  vacation?: VacationWhereUniqueInput | null;
};
