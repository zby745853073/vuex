import Vue from 'vue'
import App from './App.vue'
//1.导入 ant-desgin-vue
import Antd from 'ant-design-vue'
//2.导入组件库的样式
import 'ant-design-vue/dist/antd.css'
import store from './store/item'
Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
