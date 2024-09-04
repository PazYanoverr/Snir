import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VacationWhereUniqueInput } from "../vacation/VacationWhereUniqueInput";

export type DestinationWhereInput = {
  bookings?: BookingListRelationFilter;
  country?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  vacation?: VacationWhereUniqueInput;
};
