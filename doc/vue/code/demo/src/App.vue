<template>
  <div class="app">
    <div class="nav">
      <Button type="primary" to="/simpleForm">简单表单</Button>
      <Button type="primary" to="/dynamicTable">动态表格</Button>
      <Button type="primary" to="/calculator">计算器</Button>
      <Button type="primary" to="/readFile">读取文件</Button>
      <Button type="primary" to="/plateRecognition">车牌识别</Button>
    </div>
    <div class="content">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.app {
  margin: 0 auto;
  width: 80%;
}
.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:50%;
  margin:0 auto;
  margin-top:5rem;
}
.content{
  margin:0 auto;
  margin-top:2rem;
  width:100%;
  border: 0.1rem dashed;
  display: flex;
  flex-direction:row;
  justify-content: center;
}
</style>
