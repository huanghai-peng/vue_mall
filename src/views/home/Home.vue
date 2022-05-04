<template>
    <div class="home">
        <nav-bar>
            <template #center>
                购物街
            </template>
        </nav-bar>
        <!-- <div class="refresh-dowm" v-show="showRefresh">{{msg}}</div> -->
        <tab-control :titles="['流行','新款','精选']" @activeClick="activeClick" v-show="showTab" class="tab-control1" ref="tabControl1"></tab-control>
        
        <scroll class="homeScroll" ref="scroll" @addLoad="addLoad" probe-type="3" pull-up-load="true" click="true" @scrollHeight="scrollHeight" @refreshData="refreshData" :scrollY="true">
            <div class="pulldown-wrapper">
                <div v-show="beforePullDown">
                    <span>↓下拉刷新</span>
                </div>

                <div v-show="!beforePullDown">
                    <div v-show="isPullingDown">
                    <span>Loading...</span>
                    </div>

                    <div v-show="!isPullingDown">
                    <span>更新完成</span>
                    </div>

                </div>
        </div>
            <!-- 轮播图 -->
            <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>

            <recommend :recommends="recommends"></recommend>

            <feature-view></feature-view>

            <tab-control :titles="['流行','新款','精选']" @activeClick="activeClick" ref="tabControl2"></tab-control>

            <goods-list :goods="goods[this.currentType].list"></goods-list>

            <div class="pullup-move">
                上拉加载更多
            </div>
        </scroll>
        <back-top @click.native="backTopClick" v-show="showBackTop"></back-top>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'views/home/childCops/HomeSwiper'
import Recommend from 'views/home/childCops/Recommend'
import FeatureView from 'views/home/childCops/FeatureView'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import {getMultidataData,getHomeGoods} from 'network/home.js'

import {itemRefreshMixin,backTopMixin} from 'common/mixin'

export default {
    mixins:[itemRefreshMixin,backTopMixin],
    data(){
        return {
            banners:[],
            recommends:[],
            types:['pop','new','sell'],
            currentType:'pop',
            goods:{
                pop:{
                    page:0,
                    list:[]
                },
                new:{
                    page:0,
                    list:[]
                },
                sell:{
                    page:0,
                    list:[]
                }
            },
            heightTop:0,
            showTab:false,
            // msg:'↓下拉刷新',
            // showRefresh:true,
            // isShow:true
            beforePullDown: true,
            isPullingDown: false,
            saveY:0
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        Recommend,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        
    },
    created(){
        // 请求轮播图和导航数据
        this.getMultidataData();

        // 请求第一页商品列表数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');

    },
    methods:{
        /* 以下是函数方法 */
        activeClick(index){
            console.log(index)
            this.currentType = this.types[index];
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
        },
        // 上拉加载更多数据
        addLoad(){
            this.getHomeGoods(this.currentType)
        },
        scrollHeight(y){
            this.showTab = -this.heightTop > y
            // console.log(y)
            this.showBackTop = -y > 1000 
            /* // 改变上拉刷新文字
            if(this.isShow && y>40){
                console.log('松开立即刷新')
                this.msg = '松开立即刷新'
                this.isShow = false
            }else if(y<=0){
                console.log('↓下拉刷新')
                this.msg = '↓下拉刷新'
                this.isShow = true
                this.showRefresh = false
            }else{
                this.showRefresh = true
            } */

        },
        swiperLoad(){
           this.heightTop = this.$refs.tabControl2.$el.offsetTop
        },
        // 下拉刷新
        refreshData(){
            /* console.log('刷新中......')
            // 显示刷新成功
            this.msg = '刷新中......';

            setTimeout(()=>{
                console.log('刷新成功√')
                this.msg = '刷新成功√';
                // window.location.href="http://localhost:8081/";
            },500) */
            
            console.log('trigger pullDown')
            this.beforePullDown = false
            this.isPullingDown = true

            setTimeout(()=>{
                this.isPullingDown = false
                this.beforePullDown = true
            },500)
    },
    

        /* 以下是网络请求方法 */
        async getMultidataData(){
            const res = await getMultidataData();
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        },

       async getHomeGoods(type){
           let page = this.goods[type].page + 1
           const res = await getHomeGoods(type,page);
           this.goods[type].list.push(...res.data.list);
           this.goods[type].page +=1;
           console.log(res.data);
        }
    },
    mounted(){
        this.$eventBus.$on('clickDetail',(iid)=>{
            // 跳转到详情页
            this.$router.push('/detail/'+ iid)
        })  

    },
    activated(){
       this.$refs.scroll.scrollTo(0,this.saveY,100);
        this.refreshMinxin();
    },
    deactivated(){
        // this.$eventBus.$off('imgLoad',this.ImgListener);
        // 离开当前页面时保存当前的位置
        this.saveY = this.$refs.scroll.getScrollY()
        console.log(this.saveY)
    }
}
</script>

<style scoped>
    .home {
        position: relative;
        height: 100vh;

    }
    .homeScroll {
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        overflow: hidden;
    }
    .pulldown-wrapper{
position: absolute;
  width: 100%;
  padding :20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: #999;
}
    .tab-control1{
        position: fixed;
        top: 44px;
        left: 0;
        z-index: 2;
        background-color: #fff;
        width: 100%;
    }
    .pullup-move,
     .refresh-dowm{
        position: absolute;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-style: oblique;
    }

</style>