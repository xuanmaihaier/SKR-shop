<template>
    <div id="container">
        <Title>
            <p>最好的</p>
        </Title>
        <div class="topseller">
            <tab-item @tabItem="getTab"> </tab-item>
            <div class="selects">
                <Select />
            </div>

            <Render :getmsg="msg" />
        </div>
    </div>
</template>

<script>
import Title from "components/common/title/Title";
import TabItem from "./childComps/TabItem";
import Select from "./childComps/Select";
import Render from "./childComps/Render";
export default {
    components: {
        Title,
        TabItem,
        Select,
        Render,

    },
    data(){
        return {
            msg:"All"
        }
    },
    methods:{
        getTab(val){
            this.msg = val
        }
    },
    created(){
        console.log(this.msg);
    }
};
</script>

<style lang="less" scoped>
.topseller {
    width: 100%;
    margin: 10px auto;
}
.selects {
    line-height: 60px;
    width: 82%;
    margin: 20px auto;
    height: 60px;
    margin-top: 60px;
}

</style>