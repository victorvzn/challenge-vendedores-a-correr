import request from '../request'

const baseURL = process.env.VUE_APP_ALEGRA_END_POINT
const tokenKey = process.env.VUE_APP_ALEGRA_TOKEN_KEY
const version = '/api/v1'

const headers = () => {
  return {
    Authorization: `Basic ${tokenKey}`
  }
}

export default {
  fetchList () {
    return request({
      baseURL,
      method: 'GET',
      url: `${version}/sellers`,
      headers: headers()
    })
  },
  update (payload) {
    return request({
      baseURL,
      method: 'PUT',
      url: `${version}/sellers/${payload.id}`,
      data: payload.data,
      headers: headers()
    })
  }
}
