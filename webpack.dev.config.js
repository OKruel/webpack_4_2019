//! ATENTION -> IN DEVELOPMENT MODE SEVERAL CONFIGURATION ARE NOT APPLIED TO MAKE THE BUILD FASTER
//! CHECK THE WEBPACK.PRODUCTION.CONFIG.JS FILE FOR ALL THE EXPLANATION FOR THE LOADERS AND THE PLUGINS

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        style: './src/style-test.js',
        rocket: './src/rocket.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'style-test.html',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'WebPack 4 - Style Training',
            filename: 'style-test.html',
            chunks: ['style'],
            meta: {
                description: 'WebPack 4 - Style Training'
            }
        }),
        new HtmlWebpackPlugin({
            title: 'WebPack 4 - Image Training',
            filename: 'rocket.html',
            chunks: ['rocket'],
            meta: {
                description: 'WebPack 4 - Image Training'
            }
        })
    ]
}