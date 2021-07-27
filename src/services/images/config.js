const SEARCH_ENGINE_END_POINT = process.env.VUE_APP_SEARCH_ENGINE_END_POINT
const SEARCH_ENGINE_ID = process.env.VUE_APP_SEARCH_ENGINE_ID
const CUSTOM_SEARCH_API_KEY = process.env.VUE_APP_CUSTOM_SEARCH_API_KEY

export default {
  baseURL: SEARCH_ENGINE_END_POINT,
  version: '/customsearch/v1',
  searchEngine: {
    sort: 'date',
    safe: 'active',
    imgColorType: 'trans',
    fileType: 'png',
    filter: '0',
    imgSize: 'large',
    // imgType: 'animated',
    searchType: 'image',
    fields: 'items(link)',
    cx: SEARCH_ENGINE_ID,
    key: CUSTOM_SEARCH_API_KEY
  }
}
