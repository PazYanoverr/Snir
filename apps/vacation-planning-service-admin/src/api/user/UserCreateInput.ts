import { InputJsonValue } from "../../types";
import { VacationCreateNestedManyWithoutUsersInput } from "./VacationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  vacations?: VacationCreateNestedManyWithoutUsersInput;
};
