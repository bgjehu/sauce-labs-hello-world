module.exports = {
    entry: './client/test/unit/index.js',
    output: {
        path: __dirname + '/test/client/unit',
        filename: 'index.js'
    },
    debug: true,
    module : {
        loaders : [
            {
                test : /.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query : {
                    presets: ['es2015','react']
                }
            }]
    },
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};