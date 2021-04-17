// users 逻辑控制层
const indexDAL = require('../model/indexDAL')

const indexController = {
    getTour: (req, res) => {
        indexDAL.getTour((err,results) => {
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        })
    },

    getBlog: (req, res) => {
        indexDAL.getBlog((err,results) => {
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        })
    },

    getPack: (req, res) => {
        indexDAL.getPack((err,results) => {
            if(err){
                console.log('数据库错误');
            }else{
                res.json({code:200, data:results})
            }
        })
    },
}

module.exports = indexController