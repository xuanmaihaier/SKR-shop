<template>
   <div>
      <p>主页</p>
      <span>test</span>
      <router-link to="/login">login</router-link>
      <router-link to="/signup">signup</router-link>
   </div>
</template>

<script>
export default {
  name:"Home",
}
</script>

<style lang="less" scoped>
// @xxx: ~'(min-width:2px)';
// .both{
//   font-size: 2rem;
// }
// p{
//   color:@color-tint;
//   .both();
//   &:hover{
//     color: #123;
//   }
//   &::before{
//     position: absolute;
//     // content: '';
//     top: 0;
//     left: 0;  
//     width: 100px;
//     height: 100px;
//     background-color: chocolate;
//   }
//   @media screen and (max-width:300px){
//     color: #adff2f;
//   }
//   @media screen and (max-width:500px ) and (min-width:300px){
//     color: #8a2be2;
//   }
// }
// span{
//   font-size: 10px + @font-size; 
// }
</style>