//本模块负责处理ticket路由相关的业务
var ticketDAL = require('../model/ticketDAL')

var ticketController = {
    ticketUsers:function(req, res){
        // des
        ticketDAL.ticketUsers(function(err,results){
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        }) 
    },

    ticketItem:function(req, res){
        var ticket_id = req.query.ticket_id
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