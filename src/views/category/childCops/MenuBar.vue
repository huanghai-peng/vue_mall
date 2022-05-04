<template>  
        <scroll class="menuScroll" ref="scroll" probe-type="3"  click="true"  :scrollY="true">
            <div class="menu-bar">
                <div class="menu-bar-item" v-for="(item,index) in category" :key="index" @click="menuClick(index,item.maitKey,item.miniWallkey)" :class="{active:isActive==index}">{{item.title}}</div> 
            </div>
        </scroll>
    
</template>

<script>
    import Scroll from 'components/common/scroll/Scroll'
export default {
    data(){
        return {
            isActive:0
        }
    },
    props:{
        category:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        menuClick(index,maitKey,miniWallkey){
            this.isActive = index
            this.$emit('getmaitKey',maitKey,miniWallkey)
        }
    },
    components:{
        Scroll
    }
}
</script>

<style scoped>
    .menu-bar {
        width: 100px;
        /* background-color: #f6f6f6; */
        height: 720px;
    }
    .menuScroll {
        width: 100px;
        height: calc(100vh - 44px - 49px);
        overflow: hidden;
        background-color: #f6f6f6;

    }
    .menu-bar-item {
        width: 100px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #f6f6f6;
        font-size: 14px;
    }
    .active {
        background-color: #fff;
        color: #FF3656;
        font-weight: 700;
        border-left: 3px solid #FF3656;
    }
</style>