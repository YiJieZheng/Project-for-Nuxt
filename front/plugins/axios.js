import axios from 'axios'
import Vue from 'vue'

const service = axios.create({
    // timeout:5
    baseURL: '/api'
})
// 请求拦截
// token管理
// 响应拦截
service.interceptors.response.use(
    async response => {
        let { data } = response

        return data
    }
)


Vue.prototype.$http = service
export const http = service