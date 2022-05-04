<template>
    <div class="detail-cart" v-show="showCart">
        <div class="cart-item" :class="showCart ? 'cartUp' : 'cartDown'">
            <div class="skus">
                <img v-lazy="skus.img" alt="" class="detail-img">

                <div class="skus-hd">
                    <div class="price"> <span class="currency">{{skus.currency}}</span>{{skus.nowprice | newPrice}}</div>
                    <div class="stock">库存{{skus.stock}}件</div>
                    <div class="style">已选择：<span>"{{skus.style}}"</span> <span>"{{skus.size}}"</span></div>
                    <div class="close" @click="closeClick">❌</div>
                </div>
            </div>
                <scroll class="cartScroll " ref="scroll" probe-type="3" click="true" :scrollY="true">
                <div class="skuInfo-props">
                    <div class="skuInfo-props-item" v-if="skuInfo.props">
                        <div class="skuInfo-props-label">{{skuInfo.props[0].label}}</div>
                        <div class="skuInfo-props-list">
                            <button v-for="(v,i) in skuInfo.props[0].list" :key="i" :class="{active:styleId==v.styleId}" @click="styleClick(v.styleId)">{{v.name}}</button>
                        </div>
                    </div>
                    <div class="skuInfo-props-item" v-if="skuInfo.props">
                        <div class="skuInfo-props-label">{{skuInfo.props[1].label}}</div>
                        <div class="skuInfo-props-list">
                            <button v-for="(v,i) in skuInfo.props[1].list" :key="i" :class="{active:sizeId==v.sizeId}" @click="sizeClick(v.sizeId)">{{v.name}}</button>
                        </div>
                    </div>
                    <div>
                        <div class="skuInfo-props-label">数量：</div>
                        <div class="count">
                            <div @click="decrease">-</div>
                            <div>{{count}}</div>
                            <div @click="increase">+</div>
                        </div>
                    </div>
                </div>
            </scroll>
            <div class="sure" @click="sureClick">确定</div>
        </div>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
    
    data(){
        return {
            styleId:1,
            sizeId:100,
            skus:[],
            showCart:false,
            count: 1
        }
    },
    props:{
        skuInfo:{
            type:Object,
            detault(){
                return {
                    props:[]
                }
            }
        }
    },
    components:{
        Scroll
    },
    methods:{
        styleClick(styleId){
            // 获取颜色的id
            this.styleId = styleId
            this._getSkus()
        },
        sizeClick(sizeId){
            // 获取尺码的id
            this.sizeId = sizeId
            this._getSkus()
        },
        getSkus(data){
            data.skus.forEach((v)=>{
                if(v.sizeId == this.sizeId && v.styleId == this.styleId){
                    this.skus = v
                }
            })
        },
        _getSkus(){
            this.skuInfo.skus.forEach((v)=>{
                if(v.sizeId == this.sizeId && v.styleId == this.styleId){
                    this.skus = v
                }
            })
        },
        closeClick(){
            this.showCart = false
        },
        popUp(){
            this.showCart = true
        },
        decrease(){
            if(this.count == 1){
                return
            }
            this.count--
        },
        increase(){
            this.count++
        },
        sureClick(){
            // 确定加入购物车
            let cartObj = {};
            cartObj = {...this.skus}
            cartObj['count'] = this.count
            cartObj['checked'] = true
            this.$emit('addShoppingCart',cartObj)
        }
    },
    watch:{
        skuInfo(newDate){
            this.getSkus(newDate)
        }
    },
    filters:{
        newPrice(newDate){
            return (newDate / 100).toFixed(2)
        }
    },
    updated(){
        this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
    .detail-cart {
            position: fixed;
            left: 0;
            right: 0;
            top: 44px;
            width: 100vw;
            height: calc(100vh - 44px);
            background-color: rgba(0, 0, 0, .3);
            z-index: 999;
        }
    .cart-item {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 60vh;
        background-color: #fff;
    }
    .cartUp {
        animation: heightup linear .4s;
    }
    .cartDown {
        animation: heightdown linear .4s;
    }
    @keyframes heightup {
        0%{
            height: 0;
        }
        100% {
            height: 60vh;
        }
    }
    @keyframes heightdown {
        0%{
            height: 60vh;
        }
        100% {
            height: 0;
        }
    }
    .skuInfo-props {
        padding: 0 5px;
    }
    .skuInfo-props-label {
        font-size: 14px;
        color: #666;
    }
    .skuInfo-props-list button {
        padding: 4px 15px;
        border: 1px solid #9F9F9F;
        color: #666;
        font-size: 12px;
        margin: 10px;
        border-radius: 4px;
        outline: 0;
        background-color: #fff;
    }
    .active {
        color: var(--color-high-text) !important;
        border-color: var(--color-high-text) !important;
    }
    .detail-img {
        position: relative;
        top:-42px;
        left: 16px;
        width: 25%;
    }
    .skus {
        display: flex;
        height: 151px;
    }
    .skus-hd {
        position: relative;
        top: 0;
        left: 26px;
        flex: 1;
    }
    .close {
        position: absolute;
        right: 30px;
        top: 5px;
    }
    .price {
        margin-top: 10px;
        font-size: 30px;
        font-weight: 400;
        color: #000;
    }
    .stock {
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .stock,
    .style {
        font-size: 13px;
        color: #666;
    }
    .currency {
        vertical-align: top;
        font-size: 14px;
        
    }
    .style span {
        color: #FF627B;
    }
    .count {
        display: flex;
        margin-top: 10px;
    }
    .count div {
        width: 35px;
        height: 25px;
        line-height: 23px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.7);
    }
    .count div:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .count div:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .cartScroll {
        overflow: hidden;
        width: 100vw;
        height: calc(60vh - 151px - 54px);
    }
    .sure {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 44px;
        line-height: 44px;
        background-image: linear-gradient(to right,#FF3A59,#FF5F78);
        text-align: center;
        color: #fff;
    }
</style>