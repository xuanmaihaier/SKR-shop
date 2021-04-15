import Vue from "vue"
// 按需引入
import {
    Button, Radio, Message, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Dropdown,Menu,Table,FormModel,Upload,Checkbox,PageHeader,Steps,
} from "ant-design-vue"
// import operateCookie from "../operateCookie/operateCookie";
// use使用
const vueUse = {
    Button, Radio, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Dropdown,Menu,Table,FormModel,Upload,Checkbox,PageHeader,Steps,
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})
Vue.prototype.$message = Message
