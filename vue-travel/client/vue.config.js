module.exports = {
    // 路径配置
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views'
            }
        }
    },
    // 跨域
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/', // 设置调用的接口域名和端口号
                ws: true,
                changeOrigin: true, // 这里 true 表示实现跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}