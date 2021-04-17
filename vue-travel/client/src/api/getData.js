// 引入 request.js
import axios from '../network/request'

// 首页数据
// 热门景点
export const getTour = () => axios.get("/api/index")

