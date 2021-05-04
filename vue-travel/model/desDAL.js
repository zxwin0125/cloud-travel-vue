//本模板主要负责与index数据表进行交互
const dao = require('../config/dao')

const desDAL = {
    // 获取 des_lj 信息
    ljInfo: (cb) => {
        const sql = 'select des_lj_id, des_lj_img, des_lj_title, des_lj_score, des_lj_content from des_lj'
        dao(sql,[],function(err,results){
            if(err){
                console.log('失败', err.message)
            }else{
                cb(null,results)
            }
        })
    },

    // 获取 des_km 信息
    kmInfo: (cb) => {
        const sql = 'select des_km_id, des_km_img, des_km_title, des_km_score, des_km_content from des_km'
        dao(sql,[],function(err,results){
            if(err){
                console.log('失败', err.message)
            }else{
                cb(null,results)
            }
        })
    },

    // 获取 des_xsbn 信息
    xsbnInfo: (cb) => {
        const sql = 'select des_xsbn_id, des_xsbn_img, des_xsbn_title, des_xsbn_score, des_xsbn_content from des_xsbn'
        dao(sql,[],function(err,results){
            if(err){
                console.log('失败', err.message)
            }else{
                cb(null,results)
            }
        })
    },
    
    // 获取 des_xgll 信息
    xgllInfo: (cb) => {
        const sql = 'select des_xgll_id, des_xgll_img, des_xgll_title, des_xgll_score, des_xgll_content from des_xgll'
        dao(sql,[],function(err,results){
            if(err){
                console.log('失败', err.message)
            }else{
                cb(null,results)
            }
        })
    }

}

module.exports = desDAL