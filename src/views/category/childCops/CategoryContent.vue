<template>
    <div class="content">
        <div class="content-item" v-for="(item,index) in categorysContent.list" :key="index">
            <img :src="item.image" alt="" @load="imageLoad">
            <p class="title">{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        categorysContent:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imageLoad(){
            this.$emit('imageLoad')
        }
    }
}
</script>

<style scoped>
    .content {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 8px;
    }
    .content-item {
        width: 81px;
        text-align: center;
        margin-right: 8px;
        font-size: 12px;
        
    }
    .content-item:nth-child(3n) {
        margin-right: 0;
    }
    .content-item img {
        width: 80%;
        margin: auto;
        vertical-align: middle;
    }
    .title {
        margin: 15px 0;
    }
</style>