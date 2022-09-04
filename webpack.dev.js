const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
       "app": './src/App.js',
    },
    output: {
        filename: '[name].toDoList.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name].asset[ext]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|gif|img|svg)/i,
                type: 'asset/resource'
            }
        ]
    }
}
