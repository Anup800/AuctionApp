import { uuid,integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  teamId: uuid(),
  userRole: varchar({ length: 100 }),
  amount: integer(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  salt : varchar({ length: 255 }).notNull(),
});