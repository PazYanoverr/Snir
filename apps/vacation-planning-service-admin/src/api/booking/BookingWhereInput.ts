import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { VacationWhereUniqueInput } from "../vacation/VacationWhereUniqueInput";

export type BookingWhereInput = {
  date?: DateTimeNullableFilter;
  destination?: DestinationWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  vacation?: VacationWhereUniqueInput;
};
