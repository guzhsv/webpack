const {resolve}=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename:'main.[contenthash].js'
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                     MiniCssExtractPlugin.loader,
                     'css-loader', 
                     'sass-loader'
                    ]
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true, 
                                quality: 30,
                            },  
                        },
                    },
                ]
            },
            {
                test:  /\.(mp3|mp4)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(),
    ]
}
