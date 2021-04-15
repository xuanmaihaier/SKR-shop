<template>
  <div class="againSearch">
      <section>
          <p>'{{word}}'有<span>{{searchNumber}}</span>个搜索结果</p>
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
      onSearch(val){
          console.log(val)
      }  
    },
}
</script>

<style lang="less" scoped>

</style>