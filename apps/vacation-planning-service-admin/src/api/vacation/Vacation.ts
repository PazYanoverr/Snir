import { Booking } from "../booking/Booking";
import { Destination } from "../destination/Destination";
import { User } from "../user/User";

export type Vacation = {
  bookings?: Array<Booking>;
  createdAt: Date;
  destinations?: Array<Destination>;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
