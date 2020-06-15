<template>
    <div>
        <!-- <h3>count的值:{{count}} </h3> -->
        <h3>{{getnum()}}</h3>
        <button @click="delebtn">-n</button>
        <button @click="deleAsync(step)">异步减少</button>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions ,mapGetters} from 'vuex'
// import { } from from 'vuex'
export default {
    data(){
        return{
            step:2
        }
    },
    components:{

    },
    computed:{
        ...mapState(['count'])
    },
    methods:{
        ...mapMutations(['deleN']),
        ...mapActions(["deleAsync"]),
        ...mapGetters(['getnum']),
        delebtn(){
            console.log(this.deleN);
            this.deleN(3);
        },
        deleAsyncbtn(){
            this.deleAsync(this.step);
        }
    }
}
</script>
<style scoped>

</style>