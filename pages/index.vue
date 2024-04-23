

<template>
    

<div>
    <Card  class="bg-emerald-800 opacity-40">
<CardHeader>
  <Input v-model="taskname"  />
  <Button @click="addnewtask">add the to do</Button>
</CardHeader>
    </Card>

  </div>
  
  <div>
    <TodoList :refetch="couter">
    </TodoList>
  </div>
</template>

<script setup lang="ts">
import { tasks } from '~/db/schema';

const taskname =ref()
const status =ref(0)
const couter =ref(0)

const addnewtask=async()=>{
 
 
 

  const todo = await $fetch ('api/fetchtasks',{
  method:'POST',
  body:{
    "taskname": taskname.value,
    "taskstatus":status.value
  },

  })
  
  couter.value = couter.value + 1

  console.log(todo)
  
  
}

</script>

<style>


</style>