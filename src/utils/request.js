import axios from 'axios';

const request = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const configT = config;
    // 可以在此处配置每次请求都附带的头部信息
    // configT.headers.authorization = localStorage.getItem('token');
    return configT;
  },
  (error) => {
    // 请求错误处理
    console.log('Request Error:', error);
    return Promise.reject(error);
  },
);
// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response;
    return res;
  },
  (error) => {
    // ElMessage.error(error.response.data.message);
    // 响应报错统一处理位置
    console.log(error);
    return Promise.reject(error);
  },
);
export default request;
