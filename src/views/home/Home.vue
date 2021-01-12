<template>
  <div id="home">

    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <tabcontorl id="pzy" class="tab-contorl" v-bind:tittles= "['流行','新款','精选']" @tabclick='tabclick1' ref="tabcon2" v-show="istabtrue" ></tabcontorl>

    <Bscroll class="content1" ref="wrapper" :probetype="3" @contentisshow='isshowback' :ispull="true" @pulling='pullup'>
      
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <future/>
    <tabcontorl class="tab-contorl" v-bind:tittles= "['流行','新款','精选']" @tabclick='tabclick1' ref="tabcon1"></tabcontorl>
    <goodslist :goods="this.goods[countgoodsindex].list"></goodslist>
    </Bscroll>
          <Back @click.native="backclick" v-show="isshow"></Back>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import tabcontorl from 'components/content/tabcontorl'
  import Goodslist from '../../components/content/goodslist.vue';
  

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import Future from './childComps/Future'

  import {gethomemail,getdata} from "network/home";

  
import Bscroll from '../../components/common/scroll/bscroll.vue';
import Back from '../../components/content/back.vue';

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      Future,
      tabcontorl,
        Goodslist,
        
        Bscroll,
        Back
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        countgoodsindex:'pop',
        isshow:false,
        taboffsettop:0,
        istabtrue:false,
        pzy1:0

      }
     
    },
    created() {
      // 1.请求多个数据
      this.gethomemail1()
      this.getdata1('pop')
      this.getdata1('new')
      this.getdata1('sell')
    },
    mounted(){
      setTimeout(()=>{
          this.tabcontorl=this.$refs.tabcon1.$el.offsetTop
      // console.log(this.tabcontorl)
      },100)
    },
      activated(){
          this.$refs.wrapper.scrollback(0,this.pzy1,0)
          this.$refs.wrapper.scroll.refresh()
          
    },
    deactivated(){
        this.pzy1=this.$refs.wrapper.gethigh()
        
    },
    methods:{


      isshowback(position){
        if(position.y<=-800){
          this.isshow=true
        }else{
          this.isshow=false
        }
        if(-(position.y)>this.tabcontorl){
              this.istabtrue=true
        }else{
          this.istabtrue=false
        }
      },
      // 下面是事件监听的方法
      tabclick1(index){
          if(index==0){
            this.countgoodsindex='pop'
          }else if(index==1){
            this.countgoodsindex='new'
          }else{
            this.countgoodsindex='sell'
          }
          this.$refs.tabcon1.countindex=index
          this.$refs.tabcon2.countindex=index
      },
      // 下面是网络请求的方法
     gethomemail1(){
        gethomemail().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },

    getdata1(type){
       const page = this. goods[type].page+1
        getdata(type,page).then(res=>{
          
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.wrapper.finsh()
        })
    },
    backclick(){
      this.$refs.wrapper.scrollback(0,0,600)
    },
     pullup(){
          this.getdata1(this.countgoodsindex)
          this.$refs.wrapper.scroll.refresh()
      },

   }

  }
</script>

<style scoped>
  #home{
  /* padding-top: 44px; */
  /* height: 100vh; */
  position: relative;
}
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0; */
  }

 .content1{
   height: 475px;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
    
  
 }
 #pzy{
   position: relative;
   z-index: 99;
   top: 0;
 }
</style>
