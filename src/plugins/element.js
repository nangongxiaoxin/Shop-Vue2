import Vue from 'vue'

import { Upload,Checkbox,CheckboxGroup,Steps,Step,Tabs, Alert, Cascader, Select, Option, Tree, Tag, MessageBox, Dialog, Pagination, Tooltip, Switch, Table, TableColumn, Row, Col, Card, Button, Form, FormItem, Input, Message, Container, Header, BreadcrumbItem, Breadcrumb, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem, TabPane, Timeline, TimelineItem } from 'element-ui'

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
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Upload)
Vue.use(Timeline)
Vue.use(TimelineItem)


// $message是自定义属性
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
