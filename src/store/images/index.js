import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  isLoading: false,
  images: []
}

const images = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default images
