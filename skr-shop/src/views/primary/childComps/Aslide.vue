<template>
  <div class="Aslide">
    <div class="mask">
      <p>DATA</p>
      <p>this is item</p>
      <span>second item</span>
    </div>
    <div>
      <div class="header">
        <p>ITEM</p>
      </div>
      <a-list item-layout="horizontal" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-list-item-meta description="1000">
            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 5",
  },
  {
    title: "Ant Design Title 6",
  },
  {
    title: "Ant Design Title 7",
  },
  {
    title: "Ant Design Title 8",
  },
];
export default {
  name: "Aslide",
  data() {
    return {
      data,
    };
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
.ant-list-item{
    padding: 20px 30px 0 30px;
}
.ant-list-item-meta-content{
  display: flex;
  justify-content: space-between;
}
</style>
