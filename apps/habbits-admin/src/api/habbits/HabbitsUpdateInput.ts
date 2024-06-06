import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HabbitsUpdateInput = {
  description?: string | null;
  frequency?: string | null;
  name?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
