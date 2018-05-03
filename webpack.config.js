const path = require('path');

module.exports = {
    entry: {
        main: './source/js/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build/js')
    },
    mode: 'development'
};