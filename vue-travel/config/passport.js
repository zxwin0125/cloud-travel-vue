const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt

const userDAL = require('../model/userDAL')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'privateKey'

// 定义验证函数
function myPassport(passport) {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        //jwt_payload保存的是token生成时的对象
        console.log('qqqq', jwt_payload)
        //连接数据库，查看当前token中包含的唯一属性是否存在
        // userDAL.getAllUsers(jwt_payload.user_id, function (err, results) {
        //     if (err) {
        //         console.log(err, message)
        //         done(null, false)
        //     } else {
        //         console.log(results.length)
        //         if (results.length > 0) {
        //             done(null, jwt_payload)
        //         } else {
        //             done(null, false)
        //         }
        //     }
        // })

        User.findById(jwt_payload.id)
        .then(user => {
          if(user){
            return done(null,user);
          }

          return done(null,false);
        })
        .catch(err => console.log(err));

    }));
}



module.exports = myPassport