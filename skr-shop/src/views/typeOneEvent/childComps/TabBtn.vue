<template>
  <div class="tab-btn">
    <ul>
      <li
        v-for="(item, index) in btn"
        :key="index"
        @click="onbtn(index)"
        :class="{ btn_bor: avtiveIndex == index ? true : false }"
      >
        <button>{{ item }}</button>
      </li>
    </ul>
    <div class="sort">
      <ul>
        <li v-for="(item, index) in sort" :key="index">
          <a href="">{{ item }}</a>
        </li>
      </ul>
      <p class="dropdown">
        <a-dropdown :trigger="['click']" class="dropdown_cet">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            진행중 이벤트 <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="">진행중 이벤트</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="">진행중 이벤트</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      btn: ["All", "鞋类", "服饰", "配件", "儿童专区"],
      sort: ["全部", "收藏", "趋势", "社论", "销售", "事件"],
      avtiveIndex: "0",
    };
  },
  methods: {
    onbtn(index) {
      this.avtiveIndex = index;
      this.$emit('listTma',this.btn[index])
    },
  },
};
</script>

<style lang='less' scoped>
.tab-btn {
  width: 100%;
  height: 60px;
  margin-bottom: 100px;
  > ul {
    display: flex;
    width: 85%;
    margin: auto;

    > li {
      width: 20%;
      height: 100%;
      text-align: center;
      line-height: 60px;
      border: 1px solid #b5b5b5;
      border-bottom: 2px solid #000;
      button {
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        background-color: #fff;
        outline-style: none;
        border: none;
        cursor: pointer;
      }
    }
    .btn_bor {
      border: 2px solid #000;
      border-bottom: none;
    }
  }
}
.tab-btn {
  .sort {
    display: flex;
    justify-content: space-between;
    width: 85%;
    height: 32px;
    margin: 24px auto;
    ul {
      display: flex;

      width: 100%;
      height: 100%;
      li {
        height: 100%;
        padding: 6px 20px 6px 21px;
        border-right: 1px solid #ccc;
      }
      li:last-of-type {
        border: none;
      }
    }
    .dropdown {
      width: 150px;
      margin-right: 20px;
      .dropdown_cet {
        width: 100%;
        // margin-left: 15px;
        margin: auto;
        line-height: 32px;
        border: 1px solid #ccc;
      }
    }
  }
}

</style>