import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'
// 导入全局样式
import '@/styles/index.less'
// 全局注册--------
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
