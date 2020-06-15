import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count:0
    },
    mutations: {
      //不要再mutations不要执行异步操作
        addN (state,step) {
          state.count+=step;
        },
        deleN (state,step) {
          state.count-=step;
        }
          
      },
      actions:{
        //异步的让count改变
           addsync(context,step){
            setTimeout(()=>{
              context.commit('addN',step);
            },1000);
           },
           deleAsync(context,step){
            setTimeout(() => {
              context.commit('deleN',step);
            },1000);
           }
      },
      getters:{
        getnum(state){
          return '当前的最新数量是【'+state.count+'】';
        }
      }
})

