import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  destinationId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  vacationId?: SortOrder;
};
