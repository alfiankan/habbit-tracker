import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HabbitsListRelationFilter } from "../habbits/HabbitsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  habbitsItems?: HabbitsListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
