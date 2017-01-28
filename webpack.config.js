/**
 * Created by hikuley on 28.01.2017.
 */
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
