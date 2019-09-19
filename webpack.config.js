const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, './dist'),
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
                test: /\.(css|less)$/i,
                use:[
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    {
                        loader: require.resolve('less-loader'), // compiles Less to LESS
                        options: {
                            importLoaders: 2,
                            modules: true,
                        },
                    },
                ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'public',
            },
        ]),
    ],
    devServer: {
        inline: true,
        hot: true
    }
};