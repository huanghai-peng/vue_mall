<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
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
    .nav-bar {
        display: flex;
        background-color: var(--color-tint);
    }
    .left,
    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 44px;
    }
    .center {
        flex: 1;
        text-align: center;
        line-height: 44px;
        color: #fff;
    }
    .center>div {
        flex: 1;
    }
</style>