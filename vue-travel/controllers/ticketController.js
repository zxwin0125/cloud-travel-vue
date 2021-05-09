//本模块负责处理ticket路由相关的业务
const ticketDAL = require('../model/ticketDAL')

const ticketController = {
    // 门票信息
    ticketInfo: (req, res) => {
        ticketDAL.ticketInfo((err,results) => {
            if(err){
                console.log('ticketInfo -- 系统错误');
            }else{
                res.json({code:200, data:results})
            }
        }) 
    },
    
    // 单张门票信息
    // ticketItem:function(req, res){
    //     const ticket_id = req.query.ticket_id
    //     // des
    //     ticketDAL.ticketItem(ticket_id,function(err,results){
    //         if(err){
    //             console.log('数据库错误');
    //         }else{
    //             res.json({code:200, data:results})
    //         }
    //     }) 
    // },

    // 提交订单
    ticketOrder: (req, res) => {
        const orderInfo = req.query.ticket_id
        // des
        ticketDAL.ticketItem(ticket_id,function(err,results){
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        }) 
    }



    
}

module.exports = ticketController