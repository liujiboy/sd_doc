<template>
  <div style="width:80%">
    <Form :model="formItem" :label-width="80">
      <FormItem label="行数">
        <Input v-model="formItem.row" placeholder="输入行数" />
      </FormItem>
      <FormItem label="列数">
        <Input v-model="formItem.col" placeholder="输入列数" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="createTable">生成表格</Button>
      </FormItem>
    </Form>
    <Table :columns="columns" :data="data"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        row: 0,
        col: 0,
      },
      columns: [],
      data: [],
    };
  },
  methods: {
    createTable() {
      this.columns = [];
      for (var i = 0; i < this.formItem.col; i++)
        this.columns.push({
          title: "列" + i,
          key: "c" + i,
        });
      this.data = [];
      for ( i = 0; i < this.formItem.row; i++) {
        var rowData={};
        for (var j = 0; j < this.formItem.col; j++) {
            rowData["c"+j]=i*j
        }
        this.data.push(rowData)
      }
      console.log("create");
    },
  },
};
</script>