<template>
    <div >
  <img class="ml-12 pt-5 pb-5" src="https://i.picasion.com/gl/92/iEGN.gif" width="590" height="30" border="0" alt="https://picasion.com/gl/iEGN/" />
</div>
<div class=" w-1/2 h-auto p-2 ml-6 bg-slate-600 " >   
<div class="p-6"  v-for="task in alltasks">
<div  :class="{'line-through':task.taskstatus}" @click="changestatus(task)">{{task.taskname}}</div>
</div>
</div> 

</template>

<script setup lang="ts">
const alltasks=ref()
const isactive =ref(true )

const props = defineProps(['refetch'])





console.log(alltasks)

const changestatus =async(task)=>{
    console.log('this is getting changed')
    task.taskstatus=!task.taskstatus
    const value =await $fetch('/api/fetchtasks/'+task.id, {
    method: 'PUT',
    body: {
        "taskstatus":task.taskstatus 
    }})
  console.log(value)
}
    


const gettasks =async()=>{
    alltasks.value = await $fetch("/api/fetchtasks")
}

watch (()=>props.refetch,async(newrefetch,oldrefetch)=>{
    gettasks()
    
})

onMounted(()=>{
    gettasks()
})


</script>
