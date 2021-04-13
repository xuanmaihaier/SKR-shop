import Vue from "vue"
// 按需引入
import {
    Button, Radio, Message, Input, Icon, Tabs, Affix, Card
} from "ant-design-vue"
Vue.prototype.$message = Message
// use使用
const vueUse = {
    Button, Radio, Input, Icon, Tabs, Affix, Card
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

