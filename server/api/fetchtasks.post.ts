import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { tasks,InsertTask} from '~/db/schema';


const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

export default defineEventHandler(async(event) => {
    const body = await readBody(event)
    const newTasks:InsertTask ={
    ...body
    }
    const result = await db.insert(tasks).values(newTasks).run();
    return{
      newTasks:result
    }
    
  })

