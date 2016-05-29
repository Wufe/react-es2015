var webpack = require( 'webpack' );

module.exports = {
    devtool: "inline-sourcemap",
    entry: "./src/client/app.js",
    output: {
        path: __dirname + "/public/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015', 'stage-0' ],
                    plugins: [ 'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy' ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css!'
            }
        ]
    }
}
