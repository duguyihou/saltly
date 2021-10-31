/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const showStatus = (status: number) => {
  let msg = ''
  switch (status) {
    case 400:
      msg = '400'
      break
    case 401:
      msg = '401'
      break
    case 403:
      msg = '403'
      break
    case 404:
      msg = '404'
      break
    case 408:
      msg = '408'
      break
    case 500:
      msg = '500'
      break
    case 501:
      msg = '501'
      break
    case 502:
      msg = '502'
      break
    case 503:
      msg = '503'
      break
    case 504:
      msg = '504'
      break
    case 505:
      msg = '505'
      break
    default:
      msg = `connection error (${status})!`
  }
  return `${msg}`
}

const service = axios.create({
  baseURL: 'https://api.github.com',
  withCredentials: false,
  timeout: 30000,
  transformRequest: [
    (data: any) => {
      const request = JSON.stringify(data)
      return request
    },
  ],
  validateStatus() {
    return true
  },
  transformResponse: [
    (data: any) => {
      let response
      if (typeof data === 'string' && data.startsWith('{')) {
        response = JSON.parse(data)
      }
      return response
    },
  ],
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error) => {
    error.data = {}
    error.data.msg = 'server error'
    return Promise.resolve(error)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status } = response
    let msg = ''
    if (status < 200 || status >= 300) {
      msg = showStatus(status)
      if (typeof response.data === 'string') {
        response.data = { msg }
      } else {
        response.data.msg = msg
      }
    }
    return response
  },
  (error) => {
    error.data = {}
    error.data.msg = 'time out or server error'
    return Promise.resolve(error)
  },
)

export default service
