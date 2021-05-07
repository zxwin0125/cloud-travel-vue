//本模块负责处理ticket路由相关的业务
const ticketDAL = require('../model/ticketDAL')

const ticketController = {
    ticketInfo: (req, res) => {
        ticketDAL.ticketInfo((err,results) => {
            if(err){
                console.log('ticketInfo -- 系统错误');
            }else{
                res.json({code:200, data:results})
            }
        }) 
    },

    ticketItem:function(req, res){
        const ticket_id = req.query.ticket_id
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