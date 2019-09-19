const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, './dist')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                include: /src/
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.(js|jsx|ts|tsx)$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './public/index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
    devServer: {
        inline: true,
        hot: true
    }
};