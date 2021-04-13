import Vue from "vue"
// 按需引入
import { Button,Radio,Message} from 'ant-design-vue';
import {Input,Icon,Tabs,Affix,Card,List,Select,Pagination} from "ant-design-vue"
Vue.prototype.$message = Message
// use使用
Vue.use(Button)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Icon)
Vue.use(Tabs)
Vue.use(Affix)
Vue.use(Card)
Vue.use(List)
Vue.use(Select)
Vue.use(Pagination)