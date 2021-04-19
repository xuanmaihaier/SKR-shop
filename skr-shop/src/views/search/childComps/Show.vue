<template>
  <div class="show">
    <ul>
      <li v-for="x in 120" :key="x">
        <img src="http://image.wconcept.co.kr/images/upload/wdna/RP210413104342_KE8M.jpeg" alt="">
        <div>@Drawpaint100</div>
      </li>
    </ul>
    <a-pagination :default-current="1" :total="6000" :pageSize="120" />
  </div>
</template>

<script>
export default {
    name: 'Show'
}
</script>

<style lang="less" scoped>
.show{
  display: flex;
  flex-direction: column;
  align-items: center;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1.5vh 0;
    margin-top: 7vh;
    li{
      width: 18%;
      position: relative;
      margin-bottom: 3.5vh;
      img{
        width: 100%;
      }
      div{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(0,0,0,.2);
        color: white;
        padding: 0.5vh 1vh;
      }
    }
  }
}
</style>