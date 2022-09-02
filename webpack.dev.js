const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/App.js',
    output: {
        filename: '[name].toDoList.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFile: '[name].asset[ext]',
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
    }
}
module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(jpe?g|gif|img||svg)/i,
            type: 'asset/resource'
        }
    ]
};