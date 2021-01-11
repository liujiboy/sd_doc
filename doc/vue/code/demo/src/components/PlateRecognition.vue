<template>
  <div>
    车牌识别
    <Upload :on-success="success" action="http://www.devdemo.club:3000">
      <Button icon="ios-cloud-upload-outline">选择车牌图片</Button>
    </Upload>
    <Input v-model="plate" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      plate: "",
    };
  },
  methods: {
      success(response){
          console.log(response);
          this.plate=response.Number;
      }
  },
};
</script>
<style scoped>
</style>