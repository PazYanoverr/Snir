import { Vacation as TVacation } from "../api/vacation/Vacation";

export const VACATION_TITLE_FIELD = "name";

export const VacationTitle = (record: TVacation): string => {
  return record.name?.toString() || String(record.id);
};
