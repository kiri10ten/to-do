import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const tasks = sqliteTable('tasks', {
  id: integer('id').primaryKey(),
  taskname: text('taskname').notNull(),
  taskstatus: integer('taskstatus').notNull(),
});

export type InsertTask = typeof tasks.$inferInsert;
export type Selecttasks = typeof tasks.$inferSelect;
