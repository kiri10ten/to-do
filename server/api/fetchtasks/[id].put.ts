import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { tasks,InsertTask} from '~/db/schema';
import { eq } from "drizzle-orm";


const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

export default defineEventHandler(async(event) => {
    const userId = event.context.params?.id as string;
    const body = await readBody(event)
    const edittask:InsertTask ={
    ...body
    }
    const result = await db.update(tasks).set(edittask).where(eq(tasks.id, parseInt(userId)));
    
      return result
    
    
  })

