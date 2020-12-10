const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                use: {
                    loader: 'html-loader',
                },
                
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
};