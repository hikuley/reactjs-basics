/**
 * Created by hikuley on 28.01.2017.
 */

var UglifyJsPlugin = require('uglify-js-plugin');
var config = {
    entry: './src/app/main.js',
    output: {
        path: './dist/app',
        filename: 'bundle.js',
        publicPath: "/app/"
    },

    devServer: {
        inline: true,
        port: 5050
    },
    plugins: [
        new UglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin
            debug: true //default 'false', it will display some information in console,
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
module.exports = config;