import Vue from 'vue'

import { Pagination,Tooltip,Switch,Table,TableColumn,Row,Col,Card,Button, Form, FormItem, Input, Message, Container, Header,BreadcrumbItem,Breadcrumb, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui'

Vue.use(Button)

// 登录表单
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)

// $message是自定义属性
Vue.prototype.$message = Message
