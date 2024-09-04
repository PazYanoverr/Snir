import { InputJsonValue } from "../../types";
import { VacationUpdateManyWithoutUsersInput } from "./VacationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  vacations?: VacationUpdateManyWithoutUsersInput;
};
