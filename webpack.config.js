const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve (__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './html/index.html'
        }),
        new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([
            {
                from : './img/photo',
                to: 'img/photo',
            },

            {
                from : './img/works',
                to: 'img/works',
            },

            {
                from : './img/favicon',
                to: 'img/favicon',
            }
        ])
    ],

    

}