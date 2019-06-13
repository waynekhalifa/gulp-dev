const path = require('path');

const JS_SRC = './src/scripts/app.js';
const JS_DEST = './public/assets/js/';

module.exports = {
    entry: JS_SRC,
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, JS_DEST )
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    mode: 'development'
};