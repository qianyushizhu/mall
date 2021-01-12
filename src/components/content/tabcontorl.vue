<template>
  <div class="tabcontorl">
    <div v-for="(item,index) in tittles" 
    class="itemcontorl" 
     :class="{active:index===countindex}"
     @click="itemclick(index)" :key="index">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'tabcontorl',
    props:{
        tittles:{
            type:Array,
            defalut(){
                return[]
            }

    }
    },
    data(){
        return{
            countindex:0
        }
    },
    methods:{
        itemclick(index){
            this.countindex=index
            this.$emit('tabclick',index)
        }
    }
}
</script>

<style>
.tabcontorl{
    background-color: #fff;
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;

}
.itemcontorl{
    flex:1
}
.active{
    color:pink;
   
}
.active span{
    border-bottom: 2px solid tomato;
    padding: 4px;
}
</style>