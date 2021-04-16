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
    Button, Radio, Message, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Table,FormModel,Upload,Checkbox,PageHeader,Steps
} from "ant-design-vue"
// use使用
const vueUse = {
    Button, Radio, Input, Icon, Tabs, Affix, Card,Row,Col,List,Select,Pagination,Table,FormModel,Upload,Checkbox,PageHeader,Steps
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})
Vue.prototype.$message = Message
