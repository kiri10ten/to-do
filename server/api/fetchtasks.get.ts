import {db} from '@/db/db'
import { tasks} from '@/db/schema'; 



export default defineEventHandler(async(event) => {

    const result = await db.select().from(tasks);
    return result
  })

