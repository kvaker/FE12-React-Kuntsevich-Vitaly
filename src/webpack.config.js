const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin(options:{
        template:'./public/index.html',
        filename: './index.html',
})],
    devServer: {
        contentBase: './public',
            port: 3000,
            hot: true,
            historyApiFallback: {index: '/'}},
    }
    module: {
        rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        },
    ],
},
}