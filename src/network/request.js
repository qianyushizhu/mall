import axios from 'axios'
export function request(config) {
    // 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })
    instance.interceptors.request.use(data => {

        return data
    }, err => {
            
    })
    instance.interceptors.response.use(res => {
        // 这个res返回的结果中有data 所有我们只要返回这个data就行
        return res.data
    }, err => {
            
            
    })
    // 发送真正的请求
   return instance(config)
}