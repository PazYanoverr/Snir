import { BookingUpdateManyWithoutVacationsInput } from "./BookingUpdateManyWithoutVacationsInput";
import { DestinationUpdateManyWithoutVacationsInput } from "./DestinationUpdateManyWithoutVacationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationUpdateInput = {
  bookings?: BookingUpdateManyWithoutVacationsInput;
  destinations?: DestinationUpdateManyWithoutVacationsInput;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
