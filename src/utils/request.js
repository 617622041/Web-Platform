import axios from 'axios'
//import store from '@/store'
import httpCode from './http-Code'

const requestService = axios.create({
  baseURL:'http://192.168.85.73:8761/api/',
  timeout: 600000
})

//let requestTimes = 0
requestService.interceptors.request.use(
  config => {
    //store.commit('showLoading', true)
    //++requestTimes
    return config
  },
  error => {
    //store.commit('showLoading', false)
    //--requestTimes
    console.error('[request error]: ', error)
    Promise.reject(error)
  }
)

requestService.interceptors.response.use(
  response => {
    //!--requestTimes //&& store.commit('showLoading', false)
    if (response.data && response.data.code === 200) {
      return response.data.data
    }
    return Promise.reject(response.data.message)
  },
  error => {
    //!--requestTimes //&& store.commit('showLoading', false)
    return Promise.reject(error)
  }
)

export default requestService
