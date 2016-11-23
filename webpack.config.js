var config = {
    entry: './src/index.js'
    ,

    // externals: {
    //     main: true
    // },

    output: {
        path: './output/',
        filename: 'cruise.output.js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },


    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devtool: 'source-map'
}

module.exports = config;