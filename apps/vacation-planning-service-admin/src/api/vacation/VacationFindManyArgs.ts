import { VacationWhereInput } from "./VacationWhereInput";
import { VacationOrderByInput } from "./VacationOrderByInput";

export type VacationFindManyArgs = {
  where?: VacationWhereInput;
  orderBy?: Array<VacationOrderByInput>;
  skip?: number;
  take?: number;
};
