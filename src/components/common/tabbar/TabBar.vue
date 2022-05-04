<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
    .tab-bar {
        position:fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        background-color: #f6f6f6;
        height: 49px;
    }
</style>