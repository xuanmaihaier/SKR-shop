import Vue from "vue"
// 按需引入

import {
    Button, Radio, Message, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination
} from "ant-design-vue"
// use使用
const vueUse = {
    Button, Radio, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})
Vue.prototype.$message = Message



