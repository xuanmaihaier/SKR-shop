<template>
    <div id="tab_item">
        <div class="card-container">
            <a-tabs type="card">
                <a-tab-pane key="1" tab="All"></a-tab-pane>
                <a-tab-pane key="2" tab="WOMEN"></a-tab-pane>
                <a-tab-pane key="3" tab="MEN"></a-tab-pane>
                <a-tab-pane key="4" tab="LIFE"></a-tab-pane>
                <a-tab-pane key="5" tab="BEAUTY"></a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#tab_item {
    width: 82%;
    margin: 0 auto;
    height: 60px;
    // border: 1px solid black;
    /deep/.ant-tabs-bar {
        border: 0;
    }
    /deep/.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
        height: 60px;
    }
    /deep/.ant-tabs-nav-container {
        overflow: none;
    }
    /deep/.ant-tabs-nav {
        width: 100%;
    }
    /deep/.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
        border: 1px solid #ccc;
        background-color: white;
    }

    /deep/.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
        font-family: "ProximaNova-Semibold";
        text-align: center;
        font-weight: 700;
        font-size: 18px;
        width: calc(100% / 5);
        height: 58px;
        margin: 0;
        padding: 0 16px;
        line-height: 58px;
        // background: #fafafa;
        // border: 1px solid #e8e8e8;
        border-bottom: 2px solid black;
        border-radius: 0;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    /deep/.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
        height: 59px;
        border: 2px solid #000;
        border-bottom: none;
        color: black;
    }
    /deep/.ant-tabs-nav .ant-tabs-tab:hover {
        color: black;
    }
}
</style>