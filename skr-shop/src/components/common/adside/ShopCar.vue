<template>
  <div class="service">
    <!-- 侧边栏购物车 -->
    <header>
      <h3>购物车</h3>
      <fork @click.native="handle()"></fork>
    </header>
    <!-- <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="我的"> </a-tab-pane>
      <a-tab-pane key="2" tab="购买记录"> </a-tab-pane>
    </a-tabs> -->
    <p class="shopCar">
      <span>共 {{shopCart.length}} 件宝贝</span>
      <button @click="$router.push('/shopcart')">管理</button>
    </p>
    <div class="leary">
      <ul>
        <li v-for="(shop,index) in shopCart" :key="index">
          <img :src="shop.img">
          <div>
            <h4> {{shop.title}} </h4>
            <span>数量: {{shop.num}} </span>
            <p> ￥ {{shop.price}} <span>￥{{shop.special_price}} </span> </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import fork from "./Fork";
  import {
    mapState
  } from "vuex";
  export default {
    components: {
      fork,
    },
    data() {
      return {
        close: true,
        shopCarPic: require('assets/img/following/cart_empty_bg.jpg')
      };
    },
    created() {
      // console.log(this.$store.state);
      this.$store.commit('clear_shop_cart')
      
    },
    methods: {
      callback(key) {
        // console.log(key);
      },
      handle() {
        this.close = false;
        this.$emit("isCloseBar", this.close);
      },
    },
    computed: {
      ...mapState({
        shopCart: state => state.shopCart.shopCart
      })
    }
  };
</script>

<style lang="less" scoped>
  .service {
    position: relative;
    width: 300px;
    height: 100%;
    background-color: #fff;
    border: 2px solid #333;
    box-shadow: 10px 10px 10px 5px #333;
    overflow-y: scroll;

    .leary {
      width: 90%;
      margin: 20px auto;
      text-align: center;

      ul {
        height: 100%;
        width: 100%;

        li {
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          img {
            width: 60px;
            height: 60px;
          }

          div {
            margin-left: 10px;
            flex: 1;
            text-align: left;
            font-size: 12px;

            h4 {
              line-height: 25px;
              height: 25px;
              width: 100px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            p {
              color: #000;

              span {
                color: #BDB6B3;
                text-decoration-line: line-through;
              }
            }
          }
        }
      }

    }
  }

  header>h3 {
    width: 300px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #000;
    color: #fff;
  }

  .shopCar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    background-color: #ccc;
    padding: 0 10px;
    font-size: 12px;

    button {
      width: 50px;
      height: 20px;
      border: 0;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #ddd;
    }
  }
</style>