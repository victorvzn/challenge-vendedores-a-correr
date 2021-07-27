export default {
  SET_IS_LOADING (state, payload) {
    state.isLoading = payload.isLoading
  },
  SET_INVOICE_DATA (state, payload) {
    state.invoice = payload.data
  },
  CLEAN_INVOICE_DATA (state) {
    state.invoice = []
  }
}
