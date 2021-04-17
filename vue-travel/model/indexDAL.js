// users 数据层
const dao = require('../config/dao')

const indexDAL = {
    getTour: (cb) => {
        const sql = 'select tour_id, tour_img, tour_title from tour_info'
        dao(sql,[],(err,results) => {
            if (err) {
                console.log('失败', err.message)
            } else {
                cb(null,results)  
            }
        })
    },

    getBlog: (cb) => {
        const sql = 'select blog_id, blog_img, blog_title, blog_date, blog_context from blog_info'
        dao(sql,[],(err,results) => {
            if (err) {
                console.log('失败', err.message)
            } else {
                cb(null,results)  
            }
        })
    },

    getPack: (cb) => {
        const sql = 'select pack_id, pack_img, pack_address, pack_price, pack_time, pack_star, pack_trans, pack_food, pack_reviews from pack_info'
        dao(sql,[],(err,results) => {
            if (err) {
                console.log('失败', err.message)
            } else {
                cb(null,results)  
            }
        })
    },
}

module.exports = indexDAL