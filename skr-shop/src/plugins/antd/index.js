import Vue from "vue"
// 按需引入
import { Button,Radio,Message} from 'ant-design-vue';
import {Input,Icon,Tabs,Affix,Card} from "ant-design-vue"
Vue.prototype.$message = Message
// use使用
Vue.use(Button)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Icon)
Vue.use(Tabs)
Vue.use(Affix)
Vue.use(Card)
