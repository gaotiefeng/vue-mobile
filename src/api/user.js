import request from '@/common/common.js'

export function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data:data,
  })
}

export  function userInfo(data) {
  return request({
    url: '/user/info',
    method: 'get',
    params: data,
  })
}