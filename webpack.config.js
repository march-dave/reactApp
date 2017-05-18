var webpack = require('webpack');

var config = {
    entry: './main.js',

    output: {
        // path: '/',
        // filename: 'index.js',
        filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map'
    },

    devtool: '#source-map',

    // devServer: {
    //     inline: true,
    //     port: 8080
    // },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;