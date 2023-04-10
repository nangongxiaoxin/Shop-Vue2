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

// 树形表格
import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table',TreeTable)

// 使用axios
import axios from 'axios'
Vue.prototype.$http = axios

//edit 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 富文本编辑器对应的样式表
// import 'quill/dist/quill.core.css' // import styles
// import 'quill/dist/quill.snow.css' // for snow theme
// import 'quill/dist/quill.bubble.css' // for bubble theme
// 注册为全局可用的组件
Vue.use(VueQuillEditor)

// 配置根路径
// 本地测试
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios.defaults.baseURL = 'http://43.143.0.76:8889/api/private/v1/'

// php测试
// axios.defaults.baseURL='http://106.54.162.248/'

axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token')
  // 必须
  return config
})


Vue.filter('dateFormat',function(originVal){
  const dt = new Date(originVal)
  const y=dt.getFullYear()
  const m=(dt.getMonth()+1+'').padStart(2,'0')
  const d=(dt.getDate()+'').padStart(2,'0')
  const hh=(dt.getHours()+'').padStart(2,'0')
  const mm=(dt.getMinutes()+'').padStart(2,'0')
  const ss=(dt.getSeconds()+'').padStart(2,'0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
