<template>
    <div class="detail-base">
        <div class="title">{{baseInfo.title}}</div>
        <div class="itemInfo">
            <span class="price">{{baseInfo.price}}</span>
            <span class="oldPrice">{{baseInfo.oldPrice}}</span>
            <span class="discountDesc" v-if="baseInfo.discountDesc" :style="{backgroundColor:baseInfo.discountBgColor}">{{baseInfo.discountDesc}}</span>
        </div>
        <div class="columns" v-if="baseInfo.columns">
            <div class="columns-item">{{baseInfo.columns[0]}}</div>
            <div class="columns-item collect">{{baseInfo.columns[1]}}</div>
            <div class="columns-item del-time">{{baseInfo.services[baseInfo.services.length-1].name}}</div>
        </div>
        <div class="services" v-if="baseInfo.services">
            <span v-for="(item,index) in getServices" :key="index" class="services-item">
                <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        baseInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        getServices(){
            let services = []
            for(let i =0;i<this.baseInfo.services.length-1;i++){
                services.push(this.baseInfo.services[i])
            }
            return services
        }
    }
}
</script>

<style scoped>
    .detail-base {
        margin-top: 15px;
        padding: 0 8px;
        border-bottom: 5px solid #F2F5F8;
    }
    .title {
        margin-bottom: 10px;
        color: #222;
    }
    .price {
        font-size: 24px;
        color: var(--color-tint);
    }
    .oldPrice {
        text-decoration: line-through;
        font-size: 13px;
        margin: 0 5px;
        color: #999;
    }
    .discountDesc {
        position: relative;
        top: -8px;
        left: 0;
        /* background-color: #F13E3A; */
        color: #fff;
        font-size: 12px;
        padding: 2px 5px;
        border-radius: 15px;
    }
    .columns {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        font-size: 13px;
        line-height: 13px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        color: #999999;
        padding-bottom: 8px;
    }

    .columns-item {
        flex: 1;
    }
    .collect {
        text-align: center;
    }
    .del-time {
        text-align: right;
    }
    .services {
        display: flex;
        justify-content: space-between;
        color: #333;
        font-size: 13px;
        padding: 20px 0;
    }
    .services-item img {
        position: relative;
        top: 2px;
        left: -2px;
        width: 14px;
        height: 14px;
    }
</style>