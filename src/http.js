import axios from 'axios'
//配置全局的 axios
const http = axios.create({
  headers: {
  }
});
//请求拦截器
http.interceptors.request.use(config => {
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
    //解决重复点击导航路由报错
    const originalPush = Router.prototype.push;
    Router.prototype.push = function push(location) {
      return originalPush.call(this, location).catch(err => err);
    }
    if (errorMessage) {
      Vue.prototype.$message({
        type: 'error',
        message: errorMessage
      })
    }
  }
);
export default http
