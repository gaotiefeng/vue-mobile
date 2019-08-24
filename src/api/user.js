import request from '@/common/common.js'

export function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data:data,
  })
}