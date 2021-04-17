// 导入 axios 模块
import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    // url = baseURL + request url
    // 根目录
    baseURL: 'http://localhost:3000/',

    // 配置请求超时时间
    timeout: 5000
})

// 导出 service
export default service