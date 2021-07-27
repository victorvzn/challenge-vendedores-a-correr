import invoice from '@/services/invoices'

export default {
  getInvoice ({ commit }, payload) {
    commit('SET_IS_LOADING', { isLoading: true })
    return invoice.get(payload)
      .then(response => {
        if (response && response.status === 200) {
          commit('CLEAN_INVOICE_DATA')
          commit('SET_INVOICE_DATA', { data: response.data })
          commit('SET_IS_LOADING', { isLoading: false })
          return response.data
        }
        return response
      })
  },
  createInvoice ({ commit }, payload) {
    return invoice.create(payload)
      .then(response => {
        if (response && response.status === 200) {
          return response.data
        }
        return response
      })
  },
  invoicePreview ({ commit }, payload) {
    return invoice.preview(payload)
      .then(response => {
        if (response && response.status === 200) {
          return response.data
        }
        return response
      })
  }
}
