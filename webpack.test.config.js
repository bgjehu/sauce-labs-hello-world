module.exports = {
    entry: './public/test/test.js',
    output: {
        path: __dirname + '/test/public',
        filename: 'test.js'
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