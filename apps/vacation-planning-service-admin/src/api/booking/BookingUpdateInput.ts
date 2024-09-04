import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { VacationWhereUniqueInput } from "../vacation/VacationWhereUniqueInput";

export type BookingUpdateInput = {
  date?: Date | null;
  destination?: DestinationWhereUniqueInput | null;
  status?: "Option1" | null;
  vacation?: VacationWhereUniqueInput | null;
};
