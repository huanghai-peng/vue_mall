<template>
    <div class="cart-item" >
        <div class="check-btn" @click="checkClick" :class="{active:items.checked}">
            <img src="~assets/img/cart/tick.svg" alt="">
        </div>
        <img :src="items.img" alt="" class="shop-img" @click="itemClick">
        <div class="cart-item-info" >
            <div class="shop-name" @click="itemClick">
                <img src="~assets/img/profile/vip.svg" alt="">
                {{items.shopName}}
            </div>
            <div class="shop-title" @click="itemClick">
                {{items.shopTitle}}
            </div>
            <div class="style" @click="itemClick">
                颜色："{{items.style}}",尺码："{{items.size}}"
            </div>
            <div class="price" @click="itemClick">
                {{items.currency}}{{items.nowprice | newPrice}}
            </div>
            <div class="count">
                <div @click="decrease1(items)">-</div>
                <div>{{items.count}}</div>
                <div @click="increase1(items)">+</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
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
    filters:{
        newPrice(oldPrice){
            return (oldPrice / 100 ).toFixed(2)
        }
    },
    methods:{
        ...mapActions(['updateChecked','updateAddShopCount','updateDecreaseShopCount']),
        increase1(items){
            // 增加数量，并且更新数据
            this.updateAddShopCount(items).then(res=>{
                if(res == ''){
                    return false
                }else{
                    this.$toast({
                        message:res,
                        position:'middle',
                        duration:1000
                    })
                }
            })
        },
        decrease1(items){
            // 减少数量，并且更新数据
            this.updateDecreaseShopCount(items).then(res=>{
                if(res == ''){
                    return false
                }else{
                    this.$toast({
                        message:res,
                        position:'middle',
                        duration:1000
                    })
                }
            })
        },
        checkClick(){
            // 将当前的商品的clecked改为取反,并且判断cartList中的clecked是否有false的
            this.updateChecked({item:this.items,checked:!this.items.checked})
            
            // this.$store.commit('updateChecked',items)
        },
        itemClick(){
            // 点击跳转到详情页
            this.$router.push('/detail/'+this.items.iid)
        }
    },
}
</script>
<style scoped>
.cart-item {
    position: relative;
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
}
.check-btn {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #999999;
    margin: auto 0;
}
.check-btn img {
    width: 100%;
    height: 100%;
}
.active {
    background-color: #FF3656;
}
.shop-img {
    width: 80px;
    height: 110px;
    margin: 0 10px 0 5px;
    vertical-align: middle;
    border-radius: 8px;
}
.cart-item-info {
    flex: 1;
}
.shop-name {
    font-size: 17px;
    color: #333;
    text-align: center;
}
.shop-name img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.shop-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    width: 230px;
}
.style {
    font-size: 13px;
    color: #FF3656;
}
.price {
    font-size: 17px;
    margin-top: 10px;
    color: #FF4500;
}
.count {
    display: flex;
    position: absolute;
    right: 10px;
    bottom: 10px;
}
.count div {
    width: 30px;
    height: 23px;
    line-height: 23px;
    border: 1px solid #797979;
    text-align: center;
}
.count div:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}
.count div:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
</style>