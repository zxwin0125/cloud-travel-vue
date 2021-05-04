//本模块负责处理index路由相关的业务
const desDAL = require('../model/desDAL')

const desController = {
    des_ljInfo: (req, res) => {
        desDAL.ljInfo((err,results) => {
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        }) 
    },

    des_kmInfo: (req, res) => {
        desDAL.kmInfo((err,results) => {
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        }) 
    },

    des_xsbnInfo: (req, res) => {
        desDAL.xsbnInfo((err,results) => {
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        }) 
    },

    des_xgllInfo: (req, res) => {
        desDAL.xgllInfo((err,results) => {
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        }) 
    }
}

module.exports = desController