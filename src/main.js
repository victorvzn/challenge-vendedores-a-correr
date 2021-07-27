import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'
import VueLazyload from 'vue-lazyload'

import '@/components/shared/base/_globals.js'
import '@/components/shared/icons/_globals.js'
import '@/components/shared/images/_globals.js'

import '@/styles/main.scss'

Vue.config.productionTip = false

Vue.use(i18n)
Vue.use(Toasted)
Vue.use(VueClipboard)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'images/loader1.gif',
  attempt: 1
})

i18n.locale = 'es'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
