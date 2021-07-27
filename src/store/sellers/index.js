import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import { SELLERS_STORAGE_KEY } from './config'

// const sellers = JSON.parse(localStorage.getItem(SELLERS_STORAGE_KEY)) || []

const state = {
  isLoading: false,
  sellers: [],
  sellerVoted: null,
  sellerWinner: null,
  thereIsAWinner: false,
  totalScore: 0
}

const sellersModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default sellersModule
