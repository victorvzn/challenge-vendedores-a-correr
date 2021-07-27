import request from '../request'
import { encodeQueryString } from '@/helpers'
import config from './config'

const headers = () => {}

export default {
  fetchList (payload = { q: '' }) {
    const qs = encodeQueryString({
      q: payload.q,
      num: payload.num,
      ...config.searchEngine
    })

    console.log('qs', qs)

    return request({
      baseURL: config.baseURL,
      method: 'GET',
      url: `${config.version}?${qs}`,
      headers: headers()
    })
  }
}

// TEST: https://customsearch.googleapis.com/customsearch/v1?
// sort=date&safe=active&imgColorType=trans&fileType=png&filter=1&imgSize=medium&num=3&imgType=animated&q=pikachu&searchType=image&cx=1c58c448f3a0e4170&key=AIzaSyA5lu7vQT_TYIsIGttP_9xDxPMr6kp18X8
