<template>
    <div class="tab-bar-item" @click="clickItem">
        <div class="icon" v-if="!isShow">
            <slot name="icon"></slot>
        </div>
        <div class="icon_active" v-else>
            <slot name="icon_active"></slot>
        </div>
        <div class="text" :class="{active:isShow}">
            <slot name="text"></slot>
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
        path:{
            type:String,
            default(){
                return ''
            }
        }
    },
    methods:{
        clickItem(){
            // 点击进行跳转页面
            this.$router.push(this.path);
        }
    },
    computed:{
        isShow(){
            return this.$route.path == this.path
        }
    }
}
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
    }
    .icon img,
    .icon_active img {
        width: 24px;
        height: 24px;
        margin: 3px auto 2px;
        vertical-align: middle;
    }
    .text {
        font-size: 14px;
    }
    .active {
        color: #f00;
    }
</style>