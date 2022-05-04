<template>
    <div class="goods-list">
        <goods-item class="goods-item" v-for="(item,index) in goods" :key="index" :items="item"></goods-item>
    </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem'
export default {
    data(){
        return {

        }
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsItem
    }
}
</script>

<style scoped>
    .goods-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .goods-item {
        width: 48%;
        margin-top: 10px;
    }
</style>