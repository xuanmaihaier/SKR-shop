<template>
  <div class="hotkeyword">
    <div class="hotkeyword-cont">
      <h3>hot keyword</h3>
      <ul>
        <li v-for="(item, index) in keyword" :key="index">
          <a href="">{{ item }}</a>
        </li>
      </ul>
      <p class="search">
        <input
          type="text"
          class="ipt"
          placeholder="제목 또는 내용, 브랜드명 입력"
          v-model="txt"
        />
        <button @click="onipt"><a-icon type="search" class="search_" /></button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: [
        "21SS도 함께할 베스트 아이템! #The Best, Forever",
        "매일 입고 싶은 클래식 #프론트로우 데님 컬렉션",
        "봄을 담은 #블라우스&셔츠 ",
        "W컨셉에서만 만나볼 수 있는 #봄기운을 담은 백",
        "4월, 새롭게 주목할 #주얼리 브랜드 ",
      ],
      txt: "",
    };
  },
  methods: {
    onipt() {
      // console.log(this.txt);
    },
  },
};
</script>

<style lang='less' scoped>
.hotkeyword {
  width: 100%;
  height: 161px;
  margin: 40px 0;
  .hotkeyword-cont {
    display: flex;
    width: 85%;
    height: 100%;
    margin: auto;
    background-color: #e7e7e7;
  }
}
.hotkeyword-cont {
  h3 {
    width: 295px;
    height: 100%;
    text-transform: uppercase;
    background-color: #5a5a5a;
    color: #fff;
    font-size: 26px;
    text-align: center;
    font-family: "ProximaNova-Thin";
  }
  h3::after {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
  ul {
    width: 933px;
    height: 100%;
    padding: 10px 15px;
    overflow: hidden;
    li {
      float: left;
      height: 37px;
      border-radius: 20px;
      background-color: #fff;
      line-height: 37px;
      margin: 5px 3px;
      a {
        display: inline-block;
        height: 100%;
        color: #333333;
        padding: 0 13px;
        font-family: "yg740";
        font-size: 14px;
      }
    }
    li:hover {
      background-color: #49c7df;
    }
  }
  .search {
    display: flex;
    width: 266px;
    height: 40px;
    margin: 50px 0;
    .ipt {
      width: 100%;
      height: 100%;
      border: none;
      border-bottom: 1px solid;
      background-color: #e7e7e7;
      outline-style: none;
      padding-left: 10px;
      overflow: hidden;
    }
    button {
      width: 40px;
      height: 40px;
      outline-style: none;
      border: none;
      background-color: transparent;
      .search_ {
        width: 100%;
        height: auto;
        font-size: 25px;
        line-height: 40px;
      }
    }
  }
}
@media screen and (max-width: 1600px) {
  .hotkeyword {
    height: 255px;
    .hotkeyword-cont {
      h3 {
        width: 295px;
        height: 255px;
      }
    }
  }
}
</style>