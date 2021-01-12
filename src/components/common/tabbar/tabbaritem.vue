<template>
  <div class="tab-bar-item" @click="itemclick">
      <div v-if="!isactive">
            <slot name="itemimg"></slot>
      </div>
     <div v-else>
             <slot name="itemimgactive"></slot>
     </div>
     <div :style="isactivecolor">
            <slot name="itemtext"></slot>
     </div>
   
    
       <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
         <div>首页</div> -->
  </div>
</template>

<script>
export default {
    name:'tabbaritem',
    props:{
      path:String,
      coloractive:{
        type:String,
        default:'red'
      }
    },
    
    computed:{
      isactive(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      isactivecolor(){
        return this.isactive ? {color: this.coloractive} :{}
      }

    },
    methods:{
      itemclick(){
      
        this.$router.push(this.path)
      }
    }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 14px;
  
  
}
.tab-bar-item img{
   width: 24px;
   height: 24px;
   margin-top: 3px;
   vertical-align: middle;
   margin-bottom: 2px;

}

</style>