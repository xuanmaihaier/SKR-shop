<template>
  <div class="ShopListTab">
    <ul class="tab">
      <li class="tabitem" v-for="(item, index) in TypeTwoList" @click="liclick(index)"
        :class="{ active: page == index }" :key="index">
        {{item}}
      </li>
    </ul>
    <div class="content">
      <div class="AnCard">
        <a-card hoverable class="card" v-for="(item,index) in ShopListTab_list[page]" :key="index"
          @click="cardclick(item.id)">
          <img slot="cover" alt="example" :src="item.img" />
          <a-card-meta :title="item.title">
            <template slot="description">
              <p class="description">www.stride.fun</p>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopListTab",
    data() {
      return {
        page: 0
      }
    },
    methods: {
      liclick(index) {
        this.page = index
        console.log(index);
      },
      cardclick(id) {
        this.$router.push(`/details/${id}`)
      }
    },
    props: {
      ShopListTab_list: {
        type: Array,
        default: () => {}
      },
      TypeTwoList: {
        type: Array,
        default: () => {}
      },
    },
  };
</script>

<style lang="less" scoped>
  .tab {
    display: flex;
    width: 60%;
    margin: 0 auto;
    justify-content: space-around;
    padding: 10px 0;
    font-size: 20px;

    .tabitem {
      width: 100px;
      text-align: center;
      cursor: pointer;
      font-family: "ProximaNova-Semibold";
      color: #b5b5b5;
      border-bottom: 3px solid transparent;
      transition: all ease-in-out 0.2s;
    }
  }

  .active {
    border-bottom: 3px solid black !important;
  }

  .content {
    width: 100%;
  }

  .AnCard {
    width: 100%;
    padding: 0 10px;
    display: flex;
    text-align: center;

    .card {
      width: calc((100% / 6) - 8px);
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