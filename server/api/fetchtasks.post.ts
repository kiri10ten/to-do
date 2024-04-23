import {db} from '@/db/db'
import { tasks,InsertTask } from '@/db/schema'; 




export default defineEventHandler(async(event) => {
    const body = await readBody(event)
    const newTasks:InsertTask ={
    ...body
    }
    const result = await db.insert(tasks).values(newTasks);
    return{
      newTasks:result
    }
    
  })

