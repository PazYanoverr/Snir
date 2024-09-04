import { SortOrder } from "../../util/SortOrder";

export type VacationOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
