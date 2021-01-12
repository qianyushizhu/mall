<template>
  <div id="app">
   
    
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
     <maintabbar> </maintabbar>
  </div>
</template>
<script>
const maintabbar =()=>import('./components/content/maintabbar')
export default {
  name: 'App',
  components:{
    maintabbar,
   
    
    
  }
}
</script>
<style>

@import url('./assets/css/base.css');


</style>
