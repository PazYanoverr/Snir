import { JsonValue } from "type-fest";
import { Vacation } from "../vacation/Vacation";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  vacations?: Array<Vacation>;
};
