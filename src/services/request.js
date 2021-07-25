import axios from 'axios'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const instance = axios.create({
  headers,
  timeout: 0,
  withCredentials: false,
  maxRedirects: 0
})

export default instance
