import axios from 'axios';
import Qs from 'qs';
import * as errors from '@/common/js/config';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_WEB_API, // api的base_url//process.env.BASE_API
  timeout: 5000 // 请求超时时间
})



export default service