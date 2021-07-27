// import { SELLERS_STORAGE_KEY } from './config.js'

export default {
  SET_IS_LOADING (state, payload) {
    state.isLoading = payload.isLoading
  },
  SET_SELLERS_DATA (state, payload) {
    const sellers = payload.data.map(d => {
      if (!d.observations) {
        return { ...d, observations: '0' }
      }
      return { ...d }
    })
    state.sellers = sellers
    // localStorage.setItem(SELLERS_STORAGE_KEY, JSON.stringify(payload.data))
  },
  SET_SELLER_VOTED_DATA (state, payload) {
    state.sellerVoted = payload.data
  },
  SET_SELLER_WINNER_DATA (state, payload) {
    state.sellerWinner = payload.data
  },
  SET_THERE_IS_A_WINNER (state, payload) {
    state.thereIsAWinner = payload.data
  },
  SET_TOTAL_SCORE_DATA (state, payload) {
    state.totalScore = payload.data
  }
}
