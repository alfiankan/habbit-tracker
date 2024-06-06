import { SortOrder } from "../../util/SortOrder";

export type HabbitsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  frequency?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
