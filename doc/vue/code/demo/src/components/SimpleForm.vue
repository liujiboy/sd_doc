<template>

    <div>
        <Form  :model="formItem" :label-width="80">
            <FormItem label="A=">
                <Input v-model="formItem.a" placeholder="输入A的值"/>
            </FormItem>
            <FormItem label="B=">
                <Input v-model="formItem.b" placeholder="输入B的值"/>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="add">计算</Button>
            </FormItem>
            <FormItem label="A+B=">
                 {{result}}
            </FormItem>

        </Form>
    </div>
   
</template>
<script>
export default {
    data(){
        return {
            formItem:{
                a:0,
                b:0
            },
            result:0
        }
    },
    methods:{
        add(){
            this.result=Number(this.formItem.a)+Number(this.formItem.b);
        }
    }
}
</script>
