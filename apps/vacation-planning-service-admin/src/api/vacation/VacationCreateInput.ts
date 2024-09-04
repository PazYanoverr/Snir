import { BookingCreateNestedManyWithoutVacationsInput } from "./BookingCreateNestedManyWithoutVacationsInput";
import { DestinationCreateNestedManyWithoutVacationsInput } from "./DestinationCreateNestedManyWithoutVacationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationCreateInput = {
  bookings?: BookingCreateNestedManyWithoutVacationsInput;
  destinations?: DestinationCreateNestedManyWithoutVacationsInput;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
