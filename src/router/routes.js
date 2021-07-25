// import store from '@/store'
// import config from '@/config'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "not-fond" */ '@/views/NotFound.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
]

export default routes
