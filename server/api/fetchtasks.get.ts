import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { tasks } from '~/db/schema';


const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

export default defineEventHandler(async(event) => {

    const result = await db.select().from(tasks);
    return result
  })

