const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devetool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
});