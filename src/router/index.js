import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

const mode = 'history'

const router = new VueRouter({
  mode,
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  store.dispatch('sellers/lookForWinner')
    .then(thereIsAWinner => {
      if (thereIsAWinner && routeTo.name === 'vote') {
        return next({ name: 'home' })
      }
    })
  next()
})

export default router
