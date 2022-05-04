<template>
    <div class="goods">
        <div class="goods-desc clear-fix">
            <div class="top-icon"></div>
            <div class="desc">{{goodsInfo.desc}}</div>
            <div class="bt-icon"></div>
        </div>
        <div class="goods-key" v-if="goodsInfo.detailImage">
            {{goodsInfo.detailImage[0].key}}
        </div>
        <div class="goods-list" v-if="goodsInfo.detailImage">
            <img v-lazy="item" alt="" v-for="(item,index) in goodsInfo.detailImage[0].list" :key="index" @load="imgLoad">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgLoad(){
            this.$emit('imageLoad');
        }
    }
}
</script>

<style scoped>
    .goods {
        padding: 20px 0;
        border-bottom: 5px solid #F2F5F8;
    }
    .goods-desc {
        padding: 0 20px;
    }
    .desc {
        font-size: 14px;
        padding: 15px 0;
    }
    .top-icon,
    .bt-icon {
        position: relative;
        width: 90px;
        height: 1px;
        background-color: #A3A3A5;
    }
    .bt-icon {
        float: right;
    }
    .top-icon::before {
        position: absolute;
        top: -6px;
        left: 0;
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        background-color: #000;
    }
    .bt-icon::after {
        position: absolute;
        top: -5px;
        left: 85px;
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        background-color: #000;
    }
    .goods-key {
        padding: 10px 0 10px 15px;
        font-size: 15px;
        color: #333;
    }
    .goods-list img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        padding: 0 5px;
    }
</style>