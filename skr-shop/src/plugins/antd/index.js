import Vue from "vue"
// 按需引入
import {
    Button, Radio, Message, Input, Icon, Tabs, Affix, Card,Carousel
} from "ant-design-vue"
Vue.prototype.$message = Message
// use使用
const vueUse = {
    Button, Radio, Input, Icon, Tabs, Affix, Card,Carousel
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

