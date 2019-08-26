import axios from 'axios';
import Qs from 'qs';
import * as errors from '@/common/js/config';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_WEB_API, // api的base_url//process.env.BASE_API
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (config.method === 'post' && typeof config.data === 'string') {
    config.data = Qs.stringify(config.data)
  }
	// let token = getToken()

	// if (token) {
	// 	config.headers['api-token'] = token
	// }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    let res = response.data
    // 未登录跳转到登录页面
    if (res.code == errors.ERROR_TOKEN_ILLEGAL) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '提示', { // token过期情况
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        routes.push({path: '/user/login'})
      }).catch(()=>{

      })
    }

    return Promise.resolve(res)
  },
  error => {
    console.log('err' + error)// for debug
    
    return Promise.reject(error)
  }
)

export default service