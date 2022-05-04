import { debounce } from 'common/utils'
import backTop from '@/components/common/backtop/backTop'


export const itemRefreshMixin = {
    data() {
        return {
            refreshMinxin: null,
            ImgListener: null
        }
    },
    mounted() {
        this.refreshMinxin = debounce(this.$refs.scroll.refresh, 100);
        this.ImgListener = () => {
            this.refreshMinxin();
        }
        this.$eventBus.$on('imgLoad', this.ImgListener)
    },
}

export const backTopMixin = {
    data() {
        return {
            showBackTop: false
        }
    },
    components: {
        backTop
    },
    methods: {
        backTopClick() {
            // 返回顶部
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
    }
}