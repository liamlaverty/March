const path = require('path');
/* ===> import './main.scss'; <=== */

module.exports = {
    entry: ['./index.ts'], // , './scss/_main.scss'],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: 'css/app.css'
            //             }
            //         },
            //         {
            //             loader: 'style-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
