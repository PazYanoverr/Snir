import { Booking } from "../booking/Booking";
import { Vacation } from "../vacation/Vacation";

export type Destination = {
  bookings?: Array<Booking>;
  country: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  vacation?: Vacation | null;
};
