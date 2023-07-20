const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './debounce_function/dist/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist/frontend'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './debounce_function/frontend/index.html',
            minify: {
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}