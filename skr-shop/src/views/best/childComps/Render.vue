<template>
    <div>
        <list-top :listTop="getmsg"></list-top>
        <list-middle :listMiddle="getmsg"></list-middle>
        <list-bottom :listBottom="getmsg"></list-bottom>
        <div class="pagination">
            <div id="components-pagination-demo-mini">
                <a-pagination size="small" :total="20" />
            </div>
        </div>
    </div>
</template>

<script>
import ListTop from "./childComps/ListTop";
import ListMiddle from "./childComps/ListMiddle";
import ListBottom from "./childComps/ListBottom";
export default {
    name: "Render",
    components: {
        ListTop,
        ListMiddle,
        ListBottom,
    },
    props: {
        getmsg: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
.pagination {
    width: 82%;
    margin: 10px auto;
    margin-bottom: 40px;
    text-align: center;
}
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
.ant-pagination-prev{
    display: none !important;
}
</style>