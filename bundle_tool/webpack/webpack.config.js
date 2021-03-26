const webpack = require('webpack')
const path = require('path')
const my_plugin = require('./learn/plugin/my_plugin/section1/my_plugin.js')


module.exports = {
    mode: 'development',
    entry: './learn/webpack_module/async_import/bar.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js?$/,
    //             use: [path.resolve(__dirname, './learn/loader/my_loader/section1/var_to_const_loader_sync.js')]
    //         }
    //     ]
    // },
    // plugins: [
    //     new my_plugin({
    //         a: 1
    //     })
    // ]
}






