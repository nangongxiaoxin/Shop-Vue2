import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'


import 'default-passive-events'

// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样示表
import './assets/css/global.css'
Vue.config.productionTip = false

// 
import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table',TreeTable)

// 使用axios
import axios from 'axios'
Vue.prototype.$http = axios

// 配置根路径
// 本地测试
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// php测试
// axios.defaults.baseURL='http://106.54.162.248/'

axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token')
  // 必须
  return config
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
