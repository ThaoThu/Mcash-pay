const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs  = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/styles/themes/ant-theme-vars.less'), 'utf8'));
module.exports = {
    entry: "./index.js",
    output: {      
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'public/assets'),
        stats: 'errors-only',
        open: true,
        port: 8080,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        
        new MiniCssExtractPlugin({
            filename: 'style.css',
          }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.DefinePlugin({
            name: 'common'
        })
    ],
    module: {
        
        rules: [
            {
                test: /\.(scss)$/,
                use: [{
                  loader: 'style-loader', // inject CSS to page
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.less$/,
                use: [
                  {loader: "style-loader"},
                  MiniCssExtractPlugin.loader,
                  {loader: "css-loader"},
                  {loader: "less-loader",
                    options: {
                      modifyVars: themeVariables,
                      javascriptEnabled: true
                    }
                  }
                ]
              },
            
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env'],
                        plugins: [
                            ['import', { libraryName: "antd", style: true }],
                            ['transform-class-properties']
                          ]
                    }
                }
            }
            ,
            {
            test: /\.(jpg|png|gif|svg)$/,
            use: [
            {
                loader: 'file-loader?name=/img/[name].[ext]',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        },]
    }
}