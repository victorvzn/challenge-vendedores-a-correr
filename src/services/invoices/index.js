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
  get (payload) {
    return request({
      baseURL,
      method: 'GET',
      url: `${version}/invoices/${payload.id}`,
      headers: headers()
    })
  },
  create (payload) {
    return request({
      baseURL,
      method: 'POST',
      url: `${version}/invoices`,
      data: payload,
      headers: headers()
    })
  },
  preview (payload) {
    return request({
      baseURL,
      method: 'POST',
      url: `${version}/invoices/preview`,
      data: payload,
      headers: headers()
    })
  }
}
