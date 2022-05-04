<template>
    <div class="detail">
        <nav-bar class="nav-bar">
            <template #left>
                <img src="~assets/img/common/back.svg" alt="" @click="backClick">
            </template>
            <template #center>
                <div v-for="(item,index) in msg" :key="index" @click="itemClick(index)" :class="{active:isActive==index}" ref="">{{item}}</div>
            </template>
        </nav-bar>

        <scroll class="detailScroll" ref="scroll" probe-type="3" @scrollHeight="scrollHeight" :scrollY="true">

                <detail-swiper :banners="topImages" @img1Load="detailImgLoad"></detail-swiper>
                <div>{{$store.state.a}}</div>

                <detail-base :baseInfo="baseInfo"></detail-base>

                <detail-shop :shopInfo="shopInfo"></detail-shop>
                <detail-goods :goodsInfo="goodsInfo" @imageLoad="detailGoodsImgLoad"></detail-goods>
                <detail-params :paramsInfo="paramsInfo" ref="params"></detail-params>
                <detail-comment :commentInfo="commentInfo" @imagesLoad="detailCommentImgLoad" ref="comment"></detail-comment>

                <goods-list :goods="recommend" ref="recommend" ></goods-list>


        </scroll>
        <back-top @click.native="backTopClick" v-show="showBackTop"></back-top>
        <detail-button-bar @addCart="addCart"></detail-button-bar>
        <detail-cart :skuInfo="skuInfo" ref="cart" @addShoppingCart="addShoppingCart"></detail-cart> 
    </div>
</template>

<script>
import {getDetailData,BaseInfo,ShopInfo,getRecommend} from 'network/detail'
import NavBar from 'components/common/navbar/NavBar'
import DetailSwiper from 'views/detail/childCops/DetailSwiper'
import DetailBase from 'views/detail/childCops/DetailBase'
import DetailShop from 'views/detail/childCops/DetailShop'
import DetailGoods from 'views/detail/childCops/DetailGoods'
import DetailParams from 'views/detail/childCops/DetailParams'
import DetailComment from 'views/detail/childCops/DetailComment'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import DetailButtonBar from 'views/detail/childCops/DetailButtonBar'
import DetailCart from 'views/detail/childCops/DetailCart'

import {itemRefreshMixin,backTopMixin} from 'common/mixin'
import { debounce } from 'common/utils'

import {mapActions } from 'vuex'




export default {
    name:'Detail',
    mixins:[itemRefreshMixin,backTopMixin],
    data(){
        return {
            iid:0,
            msg:['商品','参数','评论','推荐'],
            isActive:0,
            topImages:[],
            baseInfo:{},
            shopInfo:{},
            goodsInfo:{},
            paramsInfo:{},
            commentInfo:{},
            recommend:[],
            getThemeTopY:null,
            themeTopYs:[],
            titleIndex:0,
            skuInfo:{}
        }
    },
    components:{
        NavBar,
        DetailSwiper,
        DetailBase,
        DetailShop,
        DetailGoods,
        DetailParams,
        DetailComment,
        GoodsList,
        Scroll,
        DetailButtonBar,
        DetailCart
    },
    created(){
        // 接收iid
        this.iid = this.$route.params.iid

        // 获取详情页数据
        this.getDetailData();

        // 获取推荐商品信息
        this.getRecommend();

        // 获取标题的位置
        this.getThemeTopY = debounce(()=>{
            this.themeTopYs = []
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            this.themeTopYs.push(Number.MAX_VALUE);
        },50)
    },
    
    destroyed(){
        console.log(333)
        this.$eventBus.$off('imgLoad',this.ImgListener);
    },
    methods:{
        /* 以下是方法 */
        ...mapActions(['addCarts']),
        itemClick(index){
            this.isActive = index
            // 切换当前标题到对应的位置
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500);

        },
        backClick(){
            this.$router.back();
        },
        scrollHeight(y){
            this.showBackTop = -y > 1000 
            // console.log(-y)
            // 监听滚动位置，匹配相对应的标题
            for(let i=0;i<this.themeTopYs.length;i++){
                if(this.titleIndex != i && (-y>=this.themeTopYs[i] && -y <= this.themeTopYs[i+1])){
                    this.isActive = i
                    this.titleIndex = i
                }
            }
        },
        detailImgLoad(){
            this.refreshMinxin();
            // 等图片加载完成后再调用
            this.$nextTick(()=>{
                this.getThemeTopY()
            })
        },
        detailGoodsImgLoad(){
            this.refreshMinxin();
            // 等图片加载完成后再调用
            this.$nextTick(()=>{
                this.getThemeTopY()
            })
        },
        detailCommentImgLoad(){
            this.refreshMinxin();
            // 等图片加载完成后再调用
            this.$nextTick(()=>{
                this.getThemeTopY()
            })
        },
        addCart(){
            // 弹出加入购物车功能
            this.$refs.cart.popUp()
        },
        async addShoppingCart(payload){
            payload['iid'] = this.iid;
            payload['shopTitle'] = this.baseInfo.title;
            payload['shopName'] = this.shopInfo.name;
            let message = await this.addCarts(payload)
            this.$toast({
                message:message,
                position:'middle',
                duration:1000
            })
            
            // 关闭购物车
            this.$refs.cart.closeClick()
        },
        /* 下面是网络请求 */
       async getDetailData(){
           const res = await getDetailData(this.iid)
           const data = res.result

            // 获取详情页主图图片
           this.topImages = data.itemInfo.topImages

            // 获取标题、价格数据
            this.baseInfo = new BaseInfo(data.itemInfo,data.shopInfo,data.columns)

            // 获取店铺信息数据
            this.shopInfo = new ShopInfo(data.shopInfo)


            // 获取详情页图片
            this.goodsInfo = data.detailInfo

            // 获取详情页尺码推荐和厂家信息
            this.paramsInfo = data.itemParams

            // 获取用户评价信息
            this.commentInfo = data.rate.list && data.rate.list[0]

            // 获取购物车列表数据
            this.skuInfo = data.skuInfo
            // console.log(data)
        },
        async getRecommend(){
           const res = await getRecommend();
           this.recommend = res.data.list
        }
    }
}
</script>

<style scoped>
    .detail {
        padding-bottom: 49px; 
    }
    .nav-bar {
        background-color: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, .2);
    }
    .nav-bar >>> .center {
        display: flex;
    }
    .nav-bar .center>div {
        flex: 1;
        color: #000;
    } 
    .active {
        color: var(--color-tint) !important;
    }

    .detailScroll {
        position: absolute;
        top: 44px;
        left: 0;
        width: 100vw;
        height: calc(100vh - 44px - 49px);
        overflow: hidden;

    }
</style>