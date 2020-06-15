# vuexlearn

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### vuex使用
    1.vuex的基本操作 
        import Vue from 'vue'
        import Vuex from 'vuex'
        Vue.use(Vuex)
        export default new Vuex.Store({
            state:{
                count:0
            },
            mutations: {
            //不要再mutations不要执行异步操作
            },
            actions:{
             //进行异步操作   
            },
            getters:{
             //加工state数据并返回   
            }
        })
    2.调用vuex的数据及方法
      1)state
        //禁止组件直接改变state的值
        1*{{$store.state.count}} this.$store.state.count
        2*import { mapState } from 'vuex'
          computed:{
            ...mapState(['state对应的数据'])
         },
        3* {{state对应的数据}}  this.state对应的数据
      2)mutations
        //不要再mutations不要执行异步操作
        1*this.$store.commit('mutations的函数',值(json,其他));
        2*import { mapState} from 'vuex'
          methods:{//methods函数调用
            ...mapMutations(['mutations的方法']),
            ...
             }
            this.mutations的方法(参数); {{mutations的方法(参数)}}
            @click="deleAsync(step)"
        }
      3)actions
        1*this.$store.dispatch('actions的函数',值(json,其他));
        2*import { mapActions} from 'vuex'
            methods:{
                ...mapActions(["deleAsync"]),
                deleAsyncbtn(){
                    this.deleAsync(this.step);
                }
            }
            @click="deleAsync(step)"
        3*
      4)getters
        1*{{$store.getters.getnum}}
        2*import {mapGetters} from 'vuex'
            methods:{
                ...mapGetters(['getnum']),
                delebtn(){
                    this.deleN(getnum);
                }
            } 
            {{getnum}}   

### package.json的配置
    "rules": {
      "arrow-parens": 0,
      "generator-star-spacing": 0,
      "no-mixed-spaces-and-tabs": 0
    }


