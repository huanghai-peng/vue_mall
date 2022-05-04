<template>
    <div class="category">
        <nav-bar>
            <template #center>
                <div>商品分类</div>
            </template>
        </nav-bar>
        <div class="category-content">
            <menu-bar :category="category" @getmaitKey="getmaitKey"></menu-bar>
                <scroll class="category-item " ref="scroll" probe-type="3" click="true" :scrollY="true" @scrollHeight="scrollHeight">
                        <category-content :categorysContent="categorysContent" @imageLoad="imageLoad" ></category-content>
                        <tab-control :titles="['综合','新品','销量']" @activeClick="activeClick"></tab-control>
                        <goods-list :goods="categoryDetail[currentType]" class="goods"></goods-list>
                </scroll>
        </div>
        <back-top @click.native="backTopClick" v-show="showBackTop"></back-top>
    </div>
</template>

<script>
import {getCategory,getSubCategory,getSubCategoryDetail} from 'network/category'
import NavBar from 'components/common/navbar/NavBar'
import MenuBar from 'views/category/childCops/MenuBar'
import CategoryContent from 'views/category/childCops/CategoryContent'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import {itemRefreshMixin,backTopMixin} from 'common/mixin'
const typeArr = ['pop','sell','new'];
export default {
    mixins:[itemRefreshMixin,backTopMixin],
    data(){
        return {
            category:[],
            maitKey:3627,
            categorysContent:{},
            currentType:'pop',
            miniWallkey:"10062603",
            categoryDetail:{
                'pop':[],
                'sell':[],
                'new':[]
            },
            showBackTop:false,
            saveY:0
        }
    },
    created(){
        this.getCategory();
        this.getSubCategory();
        this.getSubCategoryDetail(this.miniWallkey,'pop');
        this.getSubCategoryDetail(this.miniWallkey,'new');
        this.getSubCategoryDetail(this.miniWallkey,'sell');

    },
    methods:{
        getmaitKey(maitKey,miniWallkey){
            this.maitKey = maitKey;
            this.miniWallkey = miniWallkey
            this.getSubCategory();
            this.getSubCategoryDetail(this.miniWallkey,'pop');
            this.getSubCategoryDetail(this.miniWallkey,'new');
            this.getSubCategoryDetail(this.miniWallkey,'sell');
        },
        activeClick(index){
            this.currentType = typeArr[index]
            this.getSubCategoryDetail(this.miniWallkey,this.currentType)
        },
        imageLoad(){
            this.$refs.scroll.refresh()
        },
        scrollHeight(y){
            this.showBackTop = -y>=1000
        },
        /* 以下是网络请求部分 */
       async getCategory(){
           const res = await getCategory()
           this.category = res.data.category.list
        },
       async getSubCategory(){
          const res = await getSubCategory(this.maitKey)
          this.categorysContent = res.data
        },
       async getSubCategoryDetail(miniWallkey,currentType){
           const res = await getSubCategoryDetail(miniWallkey,currentType)
           this.categoryDetail[currentType] = res;
        }
    },
    components:{
        MenuBar,
        NavBar,
        CategoryContent,
        TabControl,
        Scroll,
        GoodsList
    },
    activated(){
        this.$refs.scroll.scrollTo(0,this.saveY,100)
        this.refreshMinxin();
    },
    deactivated(){
       this.saveY = this.$refs.scroll.getScrollY()
    }
}
</script>

<style scoped>
    .category-content {
        position: absolute;
        top: 44px;
        left: 0;
        width: 100vw;
        height: calc(100vh - 49px - 44px);
        display: flex;
    }
    .category-item {
        height: calc(100vh - 49px - 44px);
        flex: 1;
        overflow: hidden;
    }
    .goods >>> .goods-item-title {
        width: 130px ;
    }
</style>