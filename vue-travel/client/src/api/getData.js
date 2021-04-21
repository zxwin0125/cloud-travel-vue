// 引入 request.js
import axios from '../network/request'

// 首页数据
// 热门景点
export const getTour = () => axios.get("/api/index/getTour")
export const getBlog = () => axios.get("/api/index/getBlog")
export const getPack = () => axios.get("/api/index/getPack")

// 登陆接口
export const login = (user_name,user_password) => axios.post("/api/users/login", {
    user_name,
    user_password
})