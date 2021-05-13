// 连接数据库
const mysql = require('mysql');

function db(sql, params, cb) {
    /**
     * sql -> sql语句
     * params -> 传参
     * cb -> 回调函数
     */

    // 创建数据库连接
    const connection = mysql.createConnection({
        host: "localhost", // 主机名
        port: 3306, // 端口号
        database: "myserver", // 数据库
        user: "root", // 用户名
        password: "zx990125", // 密码
        multipleStatements: true //支持多语句操作   是否允许在一个query中传递多个查询语句
    })

    // 连接数据库
    connection.connect(
        function (err) {
            if (err) {
                console.log("数据库连接失败");
                res.end(
                    JSON.stringify({
                        code: 500,
                        message: "无法查询数据"
                    })
                );
            } else {
                connection.query(sql, params, function (err, results) {
                    if (err) {
                        cb(err, null) // 执行回调函数，并且把参数返回
                    } else {
                        cb(null, results)
                    }
                })
            }
            connection.end()

        }
    )
}

module.exports = db