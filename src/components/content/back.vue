<template>
  <div class="back">
      <img src="../../assets/img/top.png" alt="回到顶部">
  </div>
</template>

<script>
export default {
    name:'back'
}
</script>

<style>
.back{
    position: fixed;
    right: 8px;
    bottom: 60px;
    z-index: 99999;
}
.back img{
    width: 44px;
    height: 44px;
}
</style>