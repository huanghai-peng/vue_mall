<template>
    <div class="wrapper" ref="scroll">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import PullUp from '@better-scroll/pull-up'
    import PullDown from '@better-scroll/pull-down'

    BScroll.use(PullUp)
    BScroll.use(PullDown)
export default {
    data(){
        return {
            bs:null
        }
    },
    props:{
        probeType:0,
        pullUpLoad:false,
        click:false,
        scrollY:false
    },
    mounted() {
      this.init()
      this.pullingUp1()
      this.pullingDown1()
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.scroll, {
            scrollY: this.scrollY,
          probeType: this.probeType,
          pullUpLoad:{
              boolean: this.pullUpLoad,
              threshold: -50
          } ,
          click: this.click,
          useTransition:false,
          bounceTime:800,
          pullDownRefresh:{
              boolean: true,
              threshold:40,
              stop: 40,
          }
        })

        this.bs.on('scroll', ({ y }) => {
            this.$emit('scrollHeight',y)
        })
  
      },
      refresh(){
        this.bs.refresh && this.bs.refresh()
      },


      pullingUp1() {
          this.bs.on('pullingUp', () => {
              this.$emit('addLoad');
              this.bs.finishPullUp()
            })
      },
      pullingDown1(){
        this.bs.on('pullingDown', () => {
            this.$emit('refreshData')
            this.bs.finishPullDown()
        })
      },
    scrollTo(x,y,time){
       this.bs.scrollTo(x, y, time) 
    },
    getScrollY(){
        return this.bs ? this.bs.y : 0
    }
      
}}
</script>

<style scoped>
</style>