<template>
    <div class="content">
        <div class="row">
            <Button type="primary" style="text-align:right;font-size:2rem;width:23rem;height:5rem">{{result}}</Button>
        </div>
        <div class="row">
            <Button type="primary" @click="action('C')" style="width:17rem;height:5rem">AC</Button>
            <Button type="primary" @click="action('/')" style="width:5rem;height:5rem">/</Button>
         </div>
        <div class="row">
            <Button type="primary" @click="action('7')" style="width:5rem;height:5rem">7</Button>
            <Button type="primary" @click="action('8')" style="width:5rem;height:5rem">8</Button>
            <Button type="primary" @click="action('9')" style="width:5rem;height:5rem">9</Button>
            <Button type="primary" @click="action('*')" style="width:5rem;height:5rem">*</Button>
        </div>
        <div class="row">
            <Button type="primary" @click="action('4')" style="width:5rem;height:5rem">4</Button>
            <Button type="primary" @click="action('5')" style="width:5rem;height:5rem">5</Button>
            <Button type="primary" @click="action('6')" style="width:5rem;height:5rem">6</Button>
            <Button type="primary" @click="action('+')" style="width:5rem;height:5rem">+</Button>
        </div>
        <div class="row">
            <Button type="primary" @click="action('1')" style="width:5rem;height:5rem">1</Button>
            <Button type="primary" @click="action('2')" style="width:5rem;height:5rem">2</Button>
            <Button type="primary" @click="action('3')" style="width:5rem;height:5rem">3</Button>
            <Button type="primary" @click="action('-')" style="width:5rem;height:5rem">-</Button>
        </div>
        <div class="row">
            <Button type="primary" @click="action('0')" style="width:11rem;height:5rem">0</Button>
            <Button type="primary" @click="action('.')" style="width:5rem;height:5rem">.</Button>
            <Button type="primary" @click="action('=')" style="width:5rem;height:5rem">=</Button>
        </div>
    </div>
</template>
<script>
import readInput from '@/calculator.js'
export default {
    data(){
        return {
            result:0
        }
    },
    methods:{
        action(name)
        {
            this.result=readInput(name);
        }
    }
}
</script>
<style scoped>
.row{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    width:23rem;
    margin:0 auto;
    padding: 0;
    margin-top:0.2rem;
}
.content{
    display: flex;
    margin:0 auto;
    padding: 0;
    flex-direction: column;
    justify-content:space-between;
    border:none;
}
</style>