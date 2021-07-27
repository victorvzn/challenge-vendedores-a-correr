const uuid = require('uuid/v4')

const processImages = (images = []) => images.map(i => ({ ...i, id: uuid() }))

export default {
  SET_IS_LOADING (state, payload) {
    state.isLoading = payload.isLoading
  },
  SET_IMAGES_DATA (state, payload) {
    state.images = processImages(payload.data)
  },
  CLEAN_IMAGES_DATA (state) {
    state.images = []
  }
}
