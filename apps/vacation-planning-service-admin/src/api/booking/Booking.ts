import { Destination } from "../destination/Destination";
import { Vacation } from "../vacation/Vacation";

export type Booking = {
  createdAt: Date;
  date: Date | null;
  destination?: Destination | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  vacation?: Vacation | null;
};
