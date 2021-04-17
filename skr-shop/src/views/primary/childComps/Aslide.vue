<template>
  <div class="Aslide">
    <div class="mask">
      <p>{{ $route.params.id }}</p>
      <span>stride.fun</span>
    </div>
    <div>
      <div class="header">
        <p>热销</p>
      </div>
      <a-list item-layout="horizontal" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index" @click="onclick(item.id)">
          <a-list-item-meta :description="`${item.sale}件`">
            <a slot="title">{{ item.title }}</a>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
import bus from "utils/bus";
export default {
  name: "Aslide",
  data() {
    return {
      data:[]
    };
  },
  methods: {
    onclick(id){
      this.$router.push(`/details/${id}`)
    }
  },
  mounted() {
    bus.$on("HotSale", (res) => {
      this.data = res;
    });
  },
};
</script>

<style lang="less" scoped>
.Aslide {
  width: 16%;
  .mask {
    height: 155px;
    padding: 30px 0 0 30px;
    background-color: #5a5a5a;
    font-size: 30px;
    font-family: "ProximaNova-Thin";
    color: #fff;
    letter-spacing: -1px;
    line-height: 26px;
    font-weight: 100;
    span {
      display: block;
      margin-top: 25px;
      font-size: 24px;
      opacity: 0.7;
    }
  }
  .header {
    height: 53px;
    background-color: #f2f2f2;
    font-family: "yg740";
    font-size: 18px;
    color: #333;
    padding: 16px 0 16px 30px;
  }
}
.ant-list-item {
  padding: 20px 30px 0 30px;
}
.ant-list-item-meta-content {
  display: flex;
  justify-content: space-between;
}
.ant-list-item-meta-title{
  width: 80%;
  a{
    font-size: 12px;
  }
}
</style>
