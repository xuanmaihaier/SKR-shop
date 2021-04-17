<template>
    <div id="container">
        <Title>
            <p>最好的</p>
        </Title>
        <div class="topseller">
            <tab-item> </tab-item>
            <div class="selects">
                <Select />
            </div>

            <Render />
        </div>
        <div class="pagination">
            <Pagination />
        </div>
    </div>
</template>

<script>
import Title from "components/common/title/Title";
import TabItem from "./childComps/TabItem";
import Select from "./childComps/Select";
import Render from "./childComps/Render";
import Pagination from "./childComps/Pagination"
export default {
    components: {
        Title,
        TabItem,
        Select,
        Render,
        Pagination
    },
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
}
.pagination{
    width: 82%;
    margin: 10px auto;
    margin-bottom: 40px;
    text-align: center;
}
</style>