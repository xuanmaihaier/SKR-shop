<template>
  <div class="againSearch">
      <section>
          <p>'{{word}}' 有<span> {{searchNumber}} </span>个搜索结果</p>
      </section>
  </div>
</template>

<script>
import getSearch from 'network/getSearch.js'
export default {
    name: 'AgainSearch',
    data: function () {
        return {
            word: '',
            searchNumber: 0,
        }
    },
    created() {
        this.loadSearch();
    },
    methods: {
      loadSearch(){
          this. word = this.$route.params.word
          getSearch(this.$route.params.word).then((res) => {
              this.searchNumber = res.res.length
          })
      },
    },
    watch: {
        $route: function ()  {
            console.log(this.$route)
            // 如果路由有params并且不等于原来的word则重新发请求
            if(this.$route.params.lengtn != 0 && this.$route.params != this.word){
                this.loadSearch();
            }
        }
    }
}
</script>

<style lang="less" scoped>
.flexcenter{
    display: flex;
    align-items: center;
    justify-content: center;
}
.againSearch {
    .flexcenter();
    section{
        .flexcenter();
        margin-top: 7.4vh;
        background-color: #fafafa;
        border-top: 1px solid #e1e1e1;
        width: 64.5vw;
        height: 17.6vh;
        font-weight: border;
        font-size: 3.6vh;
        span{
            color: #0ec3b2;
        }
    }
}
</style>