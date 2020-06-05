import axios from 'axios'
//配置全局的 axios
const http = axios.create({
  headers: {
  }
});
//请求拦截器
http.interceptors.request.use(config => {
  console.log(localStorage.token+":before")
  if (localStorage.token) {
    config.headers.token = `${localStorage.token}`
    config.headers.userId = `${localStorage.getItem("userId")}`
  }
  return config
}, err => {
  return Promise.reject(err)
});

//响应拦截器
http.interceptors.response.use(res => {
  return res
}, err => {
    const errorMessage = err.response.data.message
    const errorStatus = err.response.status
    if (errorMessage) {
      Vue.prototype.$message({
        type: 'error',
        message: errorMessage
      })
    }
  }
);
export default http
