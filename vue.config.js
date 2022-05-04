module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'router': '@/router'
            }
        }
    },
    devServer: {
        port: 8081,
        open: true,
        hot: true, //自动保存
    }
}