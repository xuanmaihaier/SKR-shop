<template>
    <div class="tab">
        <a-tabs type="card" @change="callback" class="tabsItem" id="tab">
            <a-tab-pane key="1" tab="All"> </a-tab-pane>
            <a-tab-pane key="1" tab="All"> </a-tab-pane>
            <a-tab-pane key="1" tab="All"> </a-tab-pane>
            <a-tab-pane key="1" tab="All"> </a-tab-pane>
            <a-tab-pane key="1" tab="All"> </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        callback(key) {
            console.log(key);
        },
    },
};
</script>
<style lang="less" scoped>
.tab {
    width: 82%;
    margin: 50px auto;
    .tabsItem {
        width: 100%;
    }
}
/deep/ #tab .ant-tabs-nav-container {
    height: 60px;
    .ant-tabs-nav {
        width: 100%;
        height: 60px;
        .ant-tabs-tab {
            text-align: center;
            background-color: #fff;
            margin: 0;
            border-radius: 0;
            border: 2px solid #000;
            width: 20%;
            height: 60px;
            line-height: 60px;
        }
        .ant-tabs-tab-active {
            color: #000;
            // border: 2px solid #000;
            border-bottom: none;
        }
    }
}
</style>