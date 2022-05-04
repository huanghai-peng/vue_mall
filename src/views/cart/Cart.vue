<template>
    <div class="cart">
        <nav-bar class="cart-nav-bar">
            <template #center>
                <div>购物车({{getLength()}})</div>
            </template>
        </nav-bar>
        <scroll class="cart-wraper" ref="scroll" probe-type="3" :scrollY="true" click="true">
            <cart-list :cartList="$store.state.cartList"></cart-list>
        </scroll>
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import CartList from 'components/content/carts/CartList'
import CartBottomBar from 'views/cart/CartBottomBar'
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    components:{
        Scroll,
        NavBar,
        CartList,
        CartBottomBar
    },
    mounted(){
        
    },
    updated(){
        this.$refs.scroll.refresh()
    },
    activated(){
        this.$refs.scroll.refresh()
    },
    methods:{
        ...mapGetters(['getLength'])
    }
}
</script>

<style scoped>
    .cart-nav-bar {
        box-shadow: 1px 5px 5px rgba(0, 0, 0, .2);
    }
    .cart-wraper {
        overflow: hidden;
        width: 100vw;
        height: calc(100vh - 44px - 49px - 40px);
    }
</style>