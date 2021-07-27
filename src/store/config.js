import sellers from './sellers'
import images from './images'
import invoices from './invoices'

const isDevelopment = (
  process.env.NODE_ENV !== 'production' &&
  process.env.NODE_ENV !== 'dev' &&
  process.env.NODE_ENV !== 'pre'
)

const strict = isDevelopment

const state = {
  isDevelopment,
  appVersion: process.env.PACKAGE_VERSION || '0'
}

const modules = {
  sellers,
  images,
  invoices
}

export default {
  strict,
  plugins: [],
  state,
  modules
}
