// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
import iView from 'iview'

import '@/assets/iconfont/iconfont.css'
import '@/assets/fonts/font-num.css'
import 'iview/dist/styles/iview.css'
// import '@/assets/change.iview.less'
import '@/utils/date-extend.js'
// import '../static/3D/Build/UnityLoader.js'
// import '../static/3D/TemplateData/UnityProgress.js'
// import '../static/3D/TemplateData/style.css'
import '@/utils/format.js'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'cIZGIx60z7atlOAN9VreS2U6T5HIpAde'
})

Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App, BaiduMap },
  template: '<App/>'
})
