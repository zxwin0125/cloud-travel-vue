// 引入 request.js
import axios from '../network/request'

// 首页数据
// 热门景点
export const getTour = () => axios.get("/api/index/getTour")
export const getBlog = () => axios.get("/api/index/getBlog")
export const getPack = () => axios.get("/api/index/getPack")

// 攻略数据
export const getMainStrategy = () => axios.get("/api/strategy/main")
export const getHotStrategy = () => axios.get("/api/strategy/hot")

// 登陆接口
export const login = ( user_name, user_password ) => axios.post("/api/users/login", {
    user_name,
    user_password
})

// 注册接口
export const register = ( user_name, user_password, user_phone ) => axios.post('/api/users/register',{
    user_name,
    user_password,
    user_phone
})