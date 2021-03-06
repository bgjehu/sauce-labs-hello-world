module.exports = {
    entry: './client/src/app.js',
    output: {
        path: __dirname + '/build/client',
        filename: 'app.js'
    },
    debug: true,
    devtool:'source-map',
    module : {
        loaders : [
            {
                test : /.js$/,
                loader : 'babel-loader',
                query : {
                    presets: ['es2015','react']
                }
            }]
    },
    devServer: {
        proxy: {
            '/api/*': 'http://localhost:8081'
        }
    }
};