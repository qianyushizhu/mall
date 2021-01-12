<template>
  
  <div id="tabbar">
         <slot></slot>

 </div>
    
 
</template>

<script>

export default {
    name:'tabbar',
    
}
</script>

<style>
#tabbar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f7f7f7;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .12);
  
}

</style>