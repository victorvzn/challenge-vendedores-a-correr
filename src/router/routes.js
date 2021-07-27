import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/ViewHome.vue')
  },
  {
    path: '/vote/search',
    name: 'vote',
    component: () => import(/* webpackChunkName: "vote-search" */ '@/views/ViewVoteSearch.vue'),
    beforeEnter (to, from, next) {
      store.dispatch('sellers/lookForWinner')
        .then(thereIsAWinner => {
          console.log(thereIsAWinner)
          if (thereIsAWinner) {
            return next({ name: 'home' })
          }
        })
      return next()
    }
  },
  {
    path: '/vote/result',
    name: 'voteResult',
    component: () => import(/* webpackChunkName: "vote-result" */ '@/views/ViewVoteResult.vue')
  },
  {
    path: '/winner',
    name: 'winner',
    component: () => import(/* webpackChunkName: "winner" */ '@/views/ViewWinner.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/ViewNotFound.vue')
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
]

export default routes
