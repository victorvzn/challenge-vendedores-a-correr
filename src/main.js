import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import '@/components/shared/base/_globals.js'
import '@/components/shared/icons/_globals.js'
import '@/components/shared/images/_globals.js'

Vue.config.productionTip = false

Vue.use(i18n)

i18n.locale = 'es'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
