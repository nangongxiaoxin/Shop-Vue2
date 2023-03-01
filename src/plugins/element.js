import Vue from 'vue'

import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)

// 登录表单
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// $message是自定义属性
Vue.prototype.$message = Message
