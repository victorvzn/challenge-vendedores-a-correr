// import store from '@/store'
// import config from '@/config'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/PageHome.vue')
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import(/* webpackChunkName: "vote" */ '@/views/PageVote.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import(/* webpackChunkName: "result" */ '@/views/PageResult.vue')
  },
  {
    path: '/winner',
    name: 'winner',
    component: () => import(/* webpackChunkName: "winner" */ '@/views/PageWinner.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/PageNotFound.vue')
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
]

export default routes
