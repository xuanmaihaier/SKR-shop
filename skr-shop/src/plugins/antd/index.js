import Vue from "vue"
// 按需引入
import {
    Button, Radio, Message, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Dropdown,Menu
} from "ant-design-vue"
Vue.prototype.$message = Message
// use使用
const vueUse = {
    Button, Radio, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Dropdown,Menu
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

Vue.prototype.$message = Message
