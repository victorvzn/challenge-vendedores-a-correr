import sellers from '@/services/sellers'
import { MAXIMUM_SCORE_FOR_THE_WINNER } from './config'
import { getBiggestNumber, getSum } from '@/helpers'

export default {
  fetchListSellers ({ commit }) {
    return sellers.fetchList()
      .then(response => {
        if (response && response.status === 200) {
          commit('SET_SELLERS_DATA', { data: response.data })
          return response.data
        }
        return response
      })
  },
  update ({ commit }, payload) {
    return sellers.update(payload)
      .then(response => {
        if (response && response.status === 200) {
          // commit('SET_SELLERS_DATA', { data: response.data })
          return response.data
        }
        return response
      })
  },
  lookForWinner ({ commit, dispatch }, payload) {
    commit('SET_IS_LOADING', { isLoading: true })
    return sellers.fetchList()
      .then(response => {
        if (response && response.status === 200) {
          console.log('looking For Winner')
          const sellers = response.data
          const sumSellersScore = getSum(sellers, 'observations')
          const maxSellerScore = getBiggestNumber(sellers, 'observations')
          const thereIsAWinner = Number(maxSellerScore.observations) >= MAXIMUM_SCORE_FOR_THE_WINNER
          commit('SET_THERE_IS_A_WINNER', { data: thereIsAWinner })
          commit('SET_SELLER_WINNER_DATA', { data: maxSellerScore })
          commit('SET_TOTAL_SCORE_DATA', { data: sumSellersScore })
          commit('SET_IS_LOADING', { isLoading: false })
          return thereIsAWinner
        }
        return false
      })
  }
}
