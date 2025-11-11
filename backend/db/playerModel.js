import { uuid,integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const playerTable = pgTable("players", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  teamId: uuid(),
  playeRole: varchar({ length: 100 }),
  amount: integer(),
  email: varchar({ length: 255 }).notNull().unique(),
});