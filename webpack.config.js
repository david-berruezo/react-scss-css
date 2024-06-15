const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    "entry": "./src/index.js",
    "output": {
        path: path.resolve(__dirname, 'dist'),
        filename: "build.js"
    },
    "mode":"development",
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
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
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer: {
      port: 9000
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./index.html",
      }),
      new CopyPlugin({
        patterns:[
            {
                context: "./",
                from: "js/*.js"
            }
        ]
      }),
    ],
    
}