<template>
   <tabbar>
     
      <tabbaritem path="/home">
       <img slot="itemimg" src="@/assets/img/tabbar/home.svg" alt="">
       <img slot="itemimgactive" src="@/assets/img/tabbar/home_active.svg" alt="">
         <div slot="itemtext">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
           <img slot="itemimg" src="@/assets/img/tabbar/category.svg" alt="">
           <img slot="itemimgactive" src="@/assets/img/tabbar/category_active.svg" alt="">
         <div slot="itemtext">分类</div>
      </tabbaritem>
      <tabbaritem path="/shopcart">
           <img slot="itemimg" src="@/assets/img/tabbar/shopcart.svg" alt="">
           <img slot="itemimgactive" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
         <div slot="itemtext">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
           <img slot="itemimg" src="@/assets/img/tabbar/profile.svg" alt="">
           <img slot="itemimgactive" src="@/assets/img/tabbar/profile_active.svg" alt="">
         <div slot="itemtext">我的</div>
      </tabbaritem>
   </tabbar>
   
</template>

<script>
import tabbar from '../common/tabbar/tabbar'
import tabbaritem from '../common/tabbar/tabbaritem'

export default {
    name:'maintabbar',
   components:{
       tabbar,
       tabbaritem
   }
}
</script>

<style>

</style>