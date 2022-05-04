<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item,index) in titles" :key="index" @click="activeClick(index)">
            <span :class="{active: index==currentIndex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }  
    },
    methods:{
        activeClick(index){
            this.currentIndex = index;
            // 点击将index传给父组件
            this.$emit('activeClick',index);
        }
    }
}
</script>

<style scoped>
.tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
}
.tab-control-item {
    flex: 1;
    text-align: center;
}
.tab-control-item span {
    padding: 0 5px 5px;
    font-size: 15px;
}
.active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
}
</style>