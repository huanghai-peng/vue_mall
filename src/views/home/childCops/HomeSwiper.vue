<template>
    <swiper class="swiper" ref="mySwiper" :options="swiperOption">
    <swiper-slide v-for="(item,index) in banners" :key="index">
        <img :src="item.image" alt="" @load="swiperLoad">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    name: 'swiper-example-pagination',
    title: 'Pagination',
    data(){
        return {
            swiperOption: {
                autoplay: {
                    disableOnInteraction: false,
                    delay: 1000,
                },
                speed: 1000, //切换速度，即slider自动滑动开始到结束的时间(单位ms)
                loop:true, //循环切换
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods:{
        swiperLoad(){
            this.$emit('swiperLoad')
        }
    }
    
}
</script>
<style scoped>
    .swiper {
        height: 195px;
        width: 100%;
    }
    .swiper img {
        width: 100%;
    }
    .swiper-pagination >>> .swiper-pagination-bullet{
        background: #fff ;
        opacity: 1;
    }
    .swiper-pagination >>> .swiper-pagination-bullet-active {
        background-color: red;
    }
</style>