<template>
    <div class="goods-item" @click="clickDetail(items.iid)">
        <div class="goods-item-img">
            <img v-lazy="getUrl" alt="" @load="imgLoad">
        </div>
        <div class="goods-item-total clear-fix">
            <div class="goods-item-title">{{items.title}}</div>
            <span class="price">{{items.price}}</span>
            <span class="cfav">{{items.cfav}}</span>
            <button class="buy">立即购买</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:{
        items:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgLoad(){
            // 发送事件
            this.$eventBus.$emit('imgLoad',111);
        },
        clickDetail(iid){
            this.$eventBus.$emit('clickDetail',iid)
        }   
    },
    computed:{
        getUrl(){
            return   this.items.img  || this.items.image || this.items.show.img 
        }
    }
}
</script>

<style scoped>
.goods-item {
    position: relative;
    padding-bottom: 80px;
}
    .goods-item-img {
        overflow: hidden;
    }
    .goods-item-img img {
        width: 100%;
        border-radius: 5px;
    }
    .goods-item-title {
        width: 180px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 5px;
    }
    .goods-item-total {
        position: absolute;
        left: 0;
        bottom: 0;
        text-align: center;
        font-size: 12px;
    }
    .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .cfav::before {
        position: absolute;
        top: -1px;
        left: -15px;
        content: '';
        width: 14px;
        height: 14px;
        background: url('~assets/img/common/collect.svg') no-repeat 0 0/14px 14px;
    }
    .cfav {
        position: relative;
    }
    .buy {
        display: block;
        width: 90%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: var(--color-high-text);
        outline: none;
        border: 0;
        margin: 10px auto 0;
        border-radius: 5px;
    }
</style>