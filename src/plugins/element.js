import Vue from 'vue'

import { Button, Form, FormItem, Input, Message, Container, Header, Aside, Main } from 'element-ui'

Vue.use(Button)

// 登录表单
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
// $message是自定义属性
Vue.prototype.$message = Message
