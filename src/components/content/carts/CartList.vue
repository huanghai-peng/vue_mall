<template>
    <div class="cart-list">
        <cart-item v-for="(item,index) in cartList" :key="index" :items="item"></cart-item>
    </div>
</template>

<script>
import CartItem from 'components/content/carts/CartItem'
export default {
    data(){
        return {}
    },
    components:{
        CartItem
    },
    props:{
        cartList:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>

</style>