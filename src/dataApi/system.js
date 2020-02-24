import HttpRequest from '@/utils/axios'

const axios = new HttpRequest('http://192.168.85.30:8048')

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

export const getUserList = () => {
  return axios.request({
    url: '/system/users?page=1&limit=20',
    method: 'get'
  })
}

export const getUserInfo = () => {
  return axios.request({
    url: '/system/menus',
    method: 'get'
  })
}

export const getMyInfo = () => {
  return axios.request({
    url: '/system/users/current',
    method: 'get'
  })
}

export const deleteUser = id => {
  return axios.request({
    url: '/system/users/' + id,
    method: 'delete'
  })
}

export const getMenuTree = () => {
  return axios.request({
    url: '/system/menus',
    method: 'get'
  })
}

export const addMenu = data => {
  return axios.request({
    url: '/system/menus/saveOrUpdate',
    data,
    method: 'post'
  })
}

export const deleteMenu = id => {
  return axios.request({
    url: '/system/menus/' + id,
    method: 'delete'
  })
}

export const deleteRole = id => {
  return axios.request({
    url: '/system/roles/' + id,
    method: 'delete'
  })
}

export const getRoleAll = () => {
  return axios.request({
    url: '/system/roles',
    method: 'get'
  })
}

export const saveOrUpdateRole = (data) => {
  return axios.request({
    url: '/system/roles/saveOrUpdate',
    method: 'post',
    data: data
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msgId => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msgId
    }
  })
}

export const hasRead = msgId => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msgId
    }
  })
}

export const removeReaded = msgId => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msgId
    }
  })
}

export const restoreTrash = msgId => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msgId
    }
  })
}
