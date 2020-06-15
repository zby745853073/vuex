<template>
    <div>
        <!-- <h3>count的值:{{$store.state.count}}</h3> -->
        <h3>{{$store.getters.getnum}}</h3>
        <button @click="addbtn">+n</button>
        <button @click="addAsyncbtn">异步增加</button>
     </div>
</template>

<script>
export default {
    data(){
        return{
            step:3
        }
    },
    methods:{
        addbtn:function(){
            this.$store.commit('addN',this.step);
            // this.$store.dispatch('addsync',this.step);
        },
        addAsyncbtn(){
            this.$store.dispatch('addsync',this.step);
        }
    }
}
</script>
<style scoped>

</style>