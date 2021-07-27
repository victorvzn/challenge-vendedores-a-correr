import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  isLoading: false,
  invoice: null
}

const invoices = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default invoices
