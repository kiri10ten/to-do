import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
import {InferInsertModel} from "drizzle-orm"
import { boolean } from 'drizzle-orm/mysql-core';

export const tasks = sqliteTable('tasks', {
    id: integer('id').primaryKey(),
    taskname: text('name'),
    taskstatus:integer('taskstatus',{mode:'boolean'})
    
  }, 
);

export type InsertTask =InferInsertModel<typeof tasks>;

