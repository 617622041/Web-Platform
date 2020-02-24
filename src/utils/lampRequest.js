import axios from 'axios'
import {getToken} from './common.js'

const requestService = axios.create({
 //baseURL:'http://10.60.46.46:8048/lamp/',
  baseURL:'http://192.168.85.30:8048/lamp/',
  timeout: 600000
})

requestService.defaults.headers.common["Authorization"] = "";
requestService.interceptors.request.use(
  config => {
    
    config.headers= {
      "Content-Type": "application/json",
      "Authorization": 'bearer ' + getToken()
    }

    return config
  },
  error => {
    console.error('[request error]: ', error)
    Promise.reject(error)
  }
)

requestService.interceptors.response.use(
  response => {
    if (response.data && response.status === 200) {
      return response.data.data
    }
    return Promise.reject(response.data.message)
  },
  error => {
    return Promise.reject(error)
  }
)

export default requestService
