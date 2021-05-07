//本模板主要负责与index数据表进行交互
const dao = require('../config/dao')

const ticketDAL = {
    // 获取ticket信息
    ticketInfo: (cb) => {
        const sql = `select ticket_id, ticket_title, ticket_price, 
                     ticket_travel_time from ticket_info`
        dao(sql,[], (err,results) => {
            if(err){
                console.log('失败', err.message)
            }else{
                cb(null,results)
            }
        })
    },

    // 获取单个ticket信息
    ticketItemInfo: (ticket_id,cb) => {
        const sql = 'select ticket_title, ticket_price, ticket_travel_time from ticket_info where ticket_id=?'
        dao(sql,[ticket_id], (err,results) => {
            if(err){
                console.log('失败', err.message)
            }else{
                cb(null,results)
            }
        })
    }

}

module.exports = ticketDAL