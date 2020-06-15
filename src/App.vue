<template>
<div >
  <!-- <Add></Add>
  <Dele></Dele> -->
  <my-TodoList></my-TodoList>
</div>
</template>

<script>
// import Add from './components/add'
// import Dele from './components/dele'
import VuexTodoList from './components/VuexTodoList'
export default{
  data(){
    return{

    }
  },
  components:{
    // Add,
    // Dele
    "my-TodoList":VuexTodoList
  }
}
</script>

<style>
</style>
