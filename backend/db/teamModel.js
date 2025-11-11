import { uuid } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const teamTable = pgTable("teams", {
  id: uuid("id").primaryKey(),
  name: varchar({ length: 255 }).notNull().unique(),
  amount: integer(),
});