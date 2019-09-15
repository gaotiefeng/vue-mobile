import request from '@/common/js/common.js'

export function articleList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params:query,
  })
}

export function articleSave(query) {
    return request({
      url: '/article/save',
      method: 'post',
      data:query,
    })
  }