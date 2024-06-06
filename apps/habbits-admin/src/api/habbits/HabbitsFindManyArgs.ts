import { HabbitsWhereInput } from "./HabbitsWhereInput";
import { HabbitsOrderByInput } from "./HabbitsOrderByInput";

export type HabbitsFindManyArgs = {
  where?: HabbitsWhereInput;
  orderBy?: Array<HabbitsOrderByInput>;
  skip?: number;
  take?: number;
};
