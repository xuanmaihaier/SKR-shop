import Vue from "vue"
// 按需引入
import {
    Carousel,Button, Radio, Message, Input,Modal, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Dropdown,Menu,Table,FormModel,Upload,Checkbox,PageHeader,Steps,Breadcrumb,Empty
} from "ant-design-vue"
import operateCookie from "../operateCookie/operateCookie";
// use使用
const vueUse = {
    Carousel,Button, Radio, Input, Icon,Modal , Tabs, Affix, Card,Row,Col,List,Select,Pagination,Dropdown,Menu,Table,FormModel,Upload,Checkbox,PageHeader,Steps,operateCookie,Breadcrumb,Empty
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})
Vue.prototype.$message = Message
