import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_WEB_API, // api的base_url//process.env.BASE_API
  timeout: 5000 // 请求超时时间
})

export default service