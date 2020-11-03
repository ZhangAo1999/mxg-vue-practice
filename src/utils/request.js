import axios from 'axios'

// axios.get('./db.json').then(res => {
//     const data = res.data
//     console.log(data)
// })

const request = axios.create({
    // baseURL: '/dev-api',
    // baseURL: '/',
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

request.interceptors.request.use(config => {
    // 请求拦截
    return config
}, error => {
    // 出现异常
    return Promise.reject(error)
})

request.interceptors.response.use(response => {
    // 响应拦截
    return response
}, error => {
    // 出现异常
    return Promise.reject(error)
})

// request.get('./db.json').then(res => {
//     const data = res.data
//     console.log(data)
// })

export default request