import request from '@/common/js/common.js'

export function userLogin(query) {
  return request({
    url: '/user/login',
    method: 'post',
    data:query,
  })
}

export  function userInfo(query) {
  return request({
    url: '/user/info',
    method: 'get',
    params: query,
  })
}

export function userRegister(query) {
  return request({
    url: '/user/register',
    method: 'post',
    data: query,
  })
}