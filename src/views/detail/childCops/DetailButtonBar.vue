<template>
    <div class="button-bar">
        <div class="button-bar-item">
            <div class="cust">
                <div class="cust-icon"></div>
                <p>客服</p>
            </div>
            <div class="shop">
                <div class="shop-icon"></div>
                <p>店铺</p>
            </div>
            <div class="collect">
                <div class="collect-icon"></div>
                <p>收藏</p>
            </div>
        </div>
        <div class="button-bar-item">
            <div class="add-shop" @click="addCart">
                加入购物车
            </div>
            <div class="buy" >
                购买
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        addCart(){
            this.$emit('addCart')
        }
        
    }
}
</script>

<style scoped>
    .button-bar {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 49px;
        width: 100%;
        background-color: #fff;
        z-index: 999;
        box-shadow: 0 0 4px rgba(0, 0, 0, .2);
    }
    .button-bar-item {
        flex: 1;
        display: flex;
    }
    .button-bar-item>div {
        flex: 1;
        font-size: 13px;
        text-align: center;
    }
    .cust-icon,
    .shop-icon,
    .collect-icon {
        width: 22px;
        height: 22px;
        background: url(~assets/img/detail/detail_bottom.png) no-repeat 0 -51px;
        background-size: 22px auto;
        margin: 4px auto;
    }
    .shop-icon {
        background-position: 0 -98px;
    }
    .collect-icon {
        background-position: 0 0;
    }
    .add-shop {
        line-height: 49px;
        background-color: #FFE817;
        color: #333;
    }
    .buy {
        line-height: 49px;
        background-color: #FF6699;
        color: #fff;
    }

</style>