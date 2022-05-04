<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends" :key="item.sort">
            <div class="icon">
                <img :src="item.image" alt="">
            </div>
            <div class="text">{{item.title}}</div>
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
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend {
        display: flex;
        padding: 15px 0;
        border-bottom: 8px solid #eee;
    }
    .recommend-item {
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    .icon img {
        width: 90%;
        vertical-align: middle;
    }
    .text {
        margin-top: 10px;
    }
</style>