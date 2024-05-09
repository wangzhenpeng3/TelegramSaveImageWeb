// axiosInstance.js

import axios from 'axios';

// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://192.168.50.155:9999/',
  timeout: 10000000,
  // 其他自定义配置
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加认证 token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token;
    // }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log(response, 'responseresponseresponseresponseresponse')
    return response;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request;
