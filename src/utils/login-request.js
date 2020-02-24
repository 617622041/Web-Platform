import axios from 'axios'
import httpCode from './http-Code'

import HttpRequest from '@/libs/axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest('http://192.168.85.30:8048')
export default axios




const requestService = axios.create({
  baseURL:'http://192.168.85.30:8048/',
  timeout: 600000
})

requestService.defaults.headers.common["Authorization"] = "";

//let requestTimes = 0
requestService.interceptors.request.use(
  config => {
    //store.commit('showLoading', true)
    //++requestTimes
    config.headers.Authorization = "bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjM1NDIwMzksInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsic3VwZXJfYWRtaW4iXSwianRpIjoiMGZmOTZmZWYtOWVhMi00ZmM4LWExNDktMjAwYzI2MDRlMjE3IiwiY2xpZW50X2lkIjoiYXBwIiwic2NvcGUiOlsiYXBwIl19.g4DcRnpUMdZddKE8fg858cVhPYefT2hiAaFcKhwdNJfYSZ2y0Y9gkZGDaFL8zZLwCl-h9nLkBjxjYWyXLvTL8CHjQ58M5o3lgulZis5FMOGIdcW9frm3DSg0Q5k0clIGV9ss056T5-wTFlhzDi07lmJa_gIKv4qckE89Ba2zNR-Mn0fguKy76EaS0dXPo4Yz6CrzLpzUx7B3f8yebZLjSR422EpkUE-vYfvUGJOil-w_veEOOG_tW1_fnXCDRwFrbHdrd4PEM1hN5LYQyfvvl523S5YZbk_nZfVhgf-Ka0Sti3TlSp7aVMGaN9vCYD6KiSYN1c_ml3cAYDtbBrNWTw"
    return config
  },
  error => {
    //store.commit('showLoading', false)
    //--requestTimes
    console.error('[request error]: ', error)
    Promise.reject(error)
  }
)

export const login = ({username, password}) => {
    const data = {
      username,
      password
    }
    return axios.request({
      url: 'auth/password/token',
      headers: {'Authorization': 'Basic YXBwOmFwcA=='},
      method: 'post',
      data
    })
  }

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
