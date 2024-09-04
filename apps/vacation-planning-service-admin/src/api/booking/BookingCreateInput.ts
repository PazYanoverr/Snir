import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { VacationWhereUniqueInput } from "../vacation/VacationWhereUniqueInput";

export type BookingCreateInput = {
  date?: Date | null;
  destination?: DestinationWhereUniqueInput | null;
  status?: "Option1" | null;
  vacation?: VacationWhereUniqueInput | null;
};
