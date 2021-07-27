export default {
  displayIsLoading (state) {
    return state.isLoading
  },
  displayImages (state, getters, rootState, rootGetters) {
    const availableSellers = rootGetters['sellers/displaySellers']
    const imagesWithSellers = state.images.map(
      (image, index) => ({
        ...image,
        sellerId: availableSellers[index].id,
        observations: availableSellers[index].observations
      })
    )
    return imagesWithSellers
  },
  countImages (state) {
    if (Array.isArray(state.images)) {
      return state.images.length
    }
    return 0
  }
}
