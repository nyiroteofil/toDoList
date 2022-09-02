const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/App.js',
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
        new CssMinimizerPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ],
    optimization: {
        minimizer: [
        `...`,
          new CssMinimizerPlugin(),        
        ],
    }
}
module: {
    rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.(jpe?g|gif|img||svg)/i,
            type: 'asset/resource'
        }
    ]
}