import axios from 'axios';
import Qs from 'qs';
import * as errors from '@/common/js/config';
import {getToken} from '@/common/js/cache';
import routes from '@/router'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_WEB_API, // api的base_url//process.env.BASE_API
  timeout: 5000 // 请求超时时间
})

service.interceptors.request.use(config => {

  if (config.method === 'post' && typeof config.data === 'string') {
    config.data = Qs.stringify(config.data)
  }
  console.log(config.data)
  // Do something before request is sent
  let token = getToken()
   if (token) {
	 	config.headers['Auth-Token'] = token
   }

   //config.headers['Content-Type'] = 'application/json'
   //config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
   //config.headers['Content-Type'] = 'multipart/form-data'
   //config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})



service.interceptors.response.use(response =>{
  let res = response.data
  if (res.code == errors.ERROR_TOKEN_ILLEGAL || res.code == errors.ERROR_TOKEN) {
      alert('需要登录')
      routes.push({name: 'userLogin'})
      return res;
  }
  if(res.code != 0)
  {
    alert(res.message)
  }
  return res
},function (error){
  console.log(error)
  return Promise.reject(error)
}
)

export default service