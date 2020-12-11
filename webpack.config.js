const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname es el dirctorio donde nos encontramos y dist es el directorio donde vamos a guardar nuestros archivos
        filename: 'bundle.js', // usamos filename para ponerle un nombre a nuestro archivo principal y luego definimos el nombre del archivo bundle.js
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                    loader: 'html-loader',
                    },
                ]
            },
            {
                test:/\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ],
};

// module: {
//     rules: [
//         {   test: /\.js|jsx$/,
//             exclude: /(node_modules)/, 
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                 presets: ['env', 'react'] 
//                 } 
//             } 
//         } 
//     ] 
// }
