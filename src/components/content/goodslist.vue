<template>
  <div class="goods">
      <goodslistitem v-for="item in goods" :goodsitem="item" class="gooditem" ></goodslistitem>
  </div>
</template>

<script>
import Goodslistitem from './goodslistitem.vue'
export default {
    name:'goodslist',
    components:{
        Goodslistitem

    },
    props:{
        goods:{
            type:Array,
            defalut(){
                return []
            }
        }
    }
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}
</style>