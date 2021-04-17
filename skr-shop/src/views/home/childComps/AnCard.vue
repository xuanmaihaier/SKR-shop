<template>
  <div class="AnCard">
    <a-card hoverable class="card" v-for="(item,index) in AnCard_list.slice(0,4)" :key="index" @click="cardclick(item.id)">
      <img
        slot="cover"
        alt="example"
        :src="item.img"
      />
      <a-card-meta :title="item.title">
        <template slot="description">
          <p class="description">www.stride.fun</p>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "AnCard",
  props:{
    AnCard_list:{
      type:Array,
      default:()=>[]
    }
  },
  methods: {
    cardclick(id){
      this.$router.push(`/details/${id}`)
    }
  },
};
</script>

<style lang="less" scoped>
.AnCard {
  width: 100%;
  padding: 0 10px;
  display: flex;
  text-align: center;
  .card {
    width: calc((100% / 4) - 8px);
    margin: 4px;
    .img {
      width: 100%;
    }
  }
  .description {
    color: #666;
    font-family: "yg740";
    font-size: 12px;
    line-height: 1.5;
    word-break: keep-all;
  }
}
/deep/ .ant-card-meta-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333;
  font-family: "ProximaNova-Bold";
  font-size: 20px;
}
</style>