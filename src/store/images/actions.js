import images from '@/services/images'
// import responseData from './mock_data'

export default {
  fetchListImages ({ commit }, payload) {
    commit('SET_IS_LOADING', { isLoading: true })
    return images.fetchList(payload)
      .then(response => {
        // if (response && response.status === 429) {
        //   console.log(responseData.items)
        //   commit('SET_IMAGES_DATA', { data: responseData.items })
        //   commit('SET_IS_LOADING', { isLoading: false })
        //   return responseData.items
        // }
        if (response && response.status === 200) {
          commit('CLEAN_IMAGES_DATA')
          commit('SET_IMAGES_DATA', { data: response.data.items, sellers: payload.sellers })
          commit('SET_IS_LOADING', { isLoading: false })
          return response.data.items
        }
        return response
      })
  }
}
