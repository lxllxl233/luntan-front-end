// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import EL from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import InfiniteLoading from 'vue-infinite-loading';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import showdown from 'showdown'

Vue.config.productionTip = false

Vue.use(EL)
Vue.use(InfiniteLoading)
Vue.use(mavonEditor)
Vue.use(showdown)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
