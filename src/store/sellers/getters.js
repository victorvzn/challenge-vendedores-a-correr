export default {
  displayIsLoading (state) {
    return state.isLoading
  },
  displaySellers (state) {
    return state.sellers
  },
  countSellers (state) {
    return state.sellers.length
  },
  displaySellerVoted (state) {
    return state.sellerVoted
  },
  displaySellerWinner (state) {
    return state.sellerWinner
  },
  thereIsAWinner (state) {
    return state.thereIsAWinner
  },
  displayTotalScore (state) {
    return state.totalScore
  }
}
