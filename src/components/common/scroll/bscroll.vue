<template>
  <div class="wrapper" ref="bscroll">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
    import bs from 'better-scroll'
export default {
    props:{
        probetype:{
            type:Number,
            defalut:0
        },
        isshow:{
            type:Boolean,
            defalut:true
        },
        ispull:{
            type:Boolean,
            defalut:false
        }
    },
    name:'bscroll',
    data(){
        return{
            scroll:null
        }
       
    },
    mounted(){
        this.scroll=new bs(this.$refs.bscroll,{
            probeType:this.probetype,
            click:true,
            // 下面这个你就不用害怕高度的问题

            observeDOM:true,
            pullUpLoad:this.ispull
            
        }),
        this.scroll.on('scroll',(position)=>{
            this.$emit('contentisshow',position)
        }),
        this.scroll.on('pullingUp',()=>{
            this.$emit('pulling')
        })
        
    },
  
    
    methods:{
        scrollback(top,right,time){
            this.scroll.scrollTo(top,right,time)
        },
        finsh(){
            this.scroll.finishPullUp()
            
        },
        gethigh(){
           return this.scroll ? this.scroll.y : 0
        }
        
    }
    
}
</script>

<style>

</style>