import { User } from "../user/User";

export type Habbits = {
  createdAt: Date;
  description: string | null;
  frequency: string | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
