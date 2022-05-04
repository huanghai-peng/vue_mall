<template>
    <div class="main-tab-bar">
        <tab-bar>
            <tab-bar-item path="/home">
                <template #icon>
                    <img src="~assets/img/tabbar/icon01.png" alt="">
                </template>
                <template #icon_active>
                    <img src="~assets/img/tabbar/icon01_active.png" alt="">
                </template>
                <template #text>
                    首页
                </template>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <template #icon>
                    <img src="~assets/img/tabbar/icon02.png" alt="">
                </template>
                <template #icon_active>
                    <img src="~assets/img/tabbar/icon02_active.png" alt="">
                </template>
                <template #text>
                    分类
                </template>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <template #icon>
                    <img src="~assets/img/tabbar/icon03.png" alt="">
                </template>
                <template #icon_active>
                    <img src="~assets/img/tabbar/icon03_active.png" alt="">
                </template>
                <template #text>
                    购物车
                </template>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <template #icon>
                    <img src="~assets/img/tabbar/icon04.png" alt="">
                </template>
                <template #icon_active>
                    <img src="~assets/img/tabbar/icon04_active.png" alt="">
                </template>
                <template #text>
                    我的
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    data(){
        return {

        }
    },
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
</style>