import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { DestinationListRelationFilter } from "../destination/DestinationListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationWhereInput = {
  bookings?: BookingListRelationFilter;
  destinations?: DestinationListRelationFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
