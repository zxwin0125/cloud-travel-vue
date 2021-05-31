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
export const getFuzzyStrategy = () => axios.get("/api/strategy/fuzzy")
export const getDetailStrategy = (strategy_id) => axios.get("/api/strategy/detail", {
    params: {
        "strategy_id": strategy_id
    }
})
export const publishStrategy = (param, config) => axios.post("/api/strategy/publish", 
    param,
    config
)

// 目的地数据
export const getDes_lj = () => axios.get("/api/desInfo/lj")
export const getDes_km = () => axios.get("/api/desInfo/km")
export const getDes_xsbn = () => axios.get("/api/desInfo/xsbn")
export const getDes_xgll = () => axios.get("/api/desInfo/xgll")


// 票务数据
export const getMainTicket = () => axios.get("/api/tickets/main")
export const orderTicket = (order_name, order_cardId, order_phone, order_time, order_rule, ticket_id, ticket_title, ticket_price) => axios.get("/api/tickets/order", {
    params: {
        "order_name": order_name,
        "order_cardId": order_cardId,
        "order_phone": order_phone,
        "order_time": order_time,
        "order_rule": order_rule,
        "ticket_id": ticket_id,
        "ticket_title": ticket_title,
        "ticket_price": ticket_price
    }

})

// 登陆接口
export const login = (user_name, user_password) => axios.post("/api/users/login", {
    user_name,
    user_password
})

// 注册接口
export const register = (user_name, user_password, user_phone) => axios.post("/api/users/register", {
    user_name,
    user_password,
    user_phone
})

// 读取验证码信息接口
export const getCode = (user_phone) => axios.get("/api/users/getValidCode", {
    params: {
        "user_phone": user_phone
    }
})

// 获取用户数据
export const getUserInfo = (token) => axios.get("/api/users/getUserInfo", {
    params: {
        token
    }
})

// 评论列表
export const getStrategyPinglun = (strategy_id) => axios.get("/api/strategy/pinglun", {
    params: {
        "strategy_id": strategy_id
    }
})

// 发布评论信息接口
export const postComment = (user_id,user_name,user_headImg,user_pl,strategy_id) => axios.post("/api/strategy/strategypinglu", {
    user_id,
    user_name,
    user_headImg,
    user_pl,
    strategy_id
})
