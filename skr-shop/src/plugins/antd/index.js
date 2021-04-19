/*
 * @Description: 
 * @Author: He Xiantao
 * @Date: 2021-04-12 17:42:12
 * @LastEditTime: 2021-04-15 16:11:25
 * @LastEditors: He Xiantao
 */
import Vue from "vue"
// 按需引入
import {
    Carousel,Button, Radio, Message, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Dropdown,Menu,Table,FormModel,Upload,Checkbox,PageHeader,Steps,Breadcrumb
} from "ant-design-vue"
import operateCookie from "../operateCookie/operateCookie";
// use使用
const vueUse = {
    Carousel,Button, Radio, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Dropdown,Menu,Table,FormModel,Upload,Checkbox,PageHeader,Steps,operateCookie,Breadcrumb
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})
Vue.prototype.$message = Message
