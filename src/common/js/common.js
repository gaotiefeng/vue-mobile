import axios from 'axios';
import Qs from 'qs';
import * as errors from '@/common/js/config';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_WEB_API, // api的base_url//process.env.BASE_API
  timeout: 5000 // 请求超时时间
})

service.interceptors.request.use(config => {
  if (config.method === 'post' && typeof config.data === 'string') {
    config.data = Qs.stringify(config.data)
  }
  // Do something before request is sent
  // let token = getToken()

  // if (token) {
  //   config.headers['TOKEN'] = token
	// 	config.headers['Auth-Token'] = token
  // }

   config.headers['Content-Type'] = 'application/json'
   config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  // config.headers['Content-Type'] = 'multipart/form-data'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})



service.interceptors.response.use(response =>{
  alert(12)
  let res = response.data
  if(res.code != 0)
  {
    alert(res.message)
  }
  return res
},function (error){
  return Promise.reject(error)
}
)

export default service