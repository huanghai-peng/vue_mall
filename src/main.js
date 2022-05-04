import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import stroe from './store'
import store from './store'
import { Toast } from 'mint-ui'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'




// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'

// 引入mint-ui的样式
import 'mint-ui/lib/style.css'



Vue.use(VueAwesomeSwiper, /* { default global options } */ )

// 自定义图片懒加载
Vue.use(VueLazyload, {
    loading: require('assets/img/common/15833212812605.png'),
})


// 创建全局事件总线
Vue.prototype.$eventBus = new Vue()

// 创建全局toast
Vue.prototype.$toast = Toast

// 解决移动端300ms延迟
FastClick.attach(document.body)


Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')