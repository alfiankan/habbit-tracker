import { Habbits as THabbits } from "../api/habbits/Habbits";

export const HABBITS_TITLE_FIELD = "name";

export const HabbitsTitle = (record: THabbits): string => {
  return record.name?.toString() || String(record.id);
};
