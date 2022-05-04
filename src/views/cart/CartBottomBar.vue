<template>
    <div class="cart-bottom-bar">
        <div class="total">
            <div class="icon" :class="{active:isCheckedAll}" @click="checkedClickAll">
                <img src="~assets/img/cart/tick.svg" alt="">
            </div>
            全选
        </div>
        <div class="statis">
            合计: <span style="color:#FF3656;">￥{{getTotalPrice() | newPrice}}</span> 
        </div>
        <div class="settlement">
            结算({{getTotalLength()}})
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {
            cartData:[]
        }
    },
    methods:{
        ...mapActions(['updateChecked']),
        ...mapGetters(['getTotalPrice','getTotalLength']),
        checkedClickAll(){
            // 如果当前的全选按钮为true，则全部改为false
            if(this.isCheckedAll){
                this.$store.state.cartList.map(item=>{
                    this.updateChecked({item:item,checked:false})
                })
            }else{
                this.$store.state.cartList.map(item=>{
                    this.updateChecked({item:item,checked:true})
                })
            }
            
        }
    },
    computed:{
        isCheckedAll(){
            // every 一假即假，如果有一个为false，则返回false
            if(this.$store.state.cartList.length == 0){
                return false
            }
            return  this.$store.state.cartList.every(item=>item.checked)
        }
            
    },
    filters:{
        newPrice(oldPrice){
            return (oldPrice / 100 ).toFixed(2)
        }
    },
    }
</script>
<style scoped>
.cart-bottom-bar {
    display: flex;
}
.total {
    display: flex;
    line-height: 40px;
    margin: 0 20px;
}
    .icon {
        width: 16px;
        height: 16px;
        line-height: 16px;
        border-radius: 50%;
        background-color: #999999;
        margin: auto 0;
    }
    .icon img {
        width: 100%;
        height: 100%;
    }
    .statis {
        flex: 1;
        line-height: 40px;
        text-align: center;
    }
    .settlement {
        width: 90px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background-color: #FF3656;
    }
    .active {
    background-color: #FF3656;
}
</style>