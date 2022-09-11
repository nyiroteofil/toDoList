const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        "app": './src/App.js',
     },
    output: {
        filename: '[name].toDoList.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name].asset[ext]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
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
};