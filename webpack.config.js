const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        histovis: [
            path.resolve(__dirname, 'src/photogrammetric-camera.js'),
            path.resolve(__dirname, 'src/main.js')
        ]
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        // umdNamedDefine: true,
    },
    plugins: [

        // Prevent the generation of module fs for import on copc dependency
        // See https://webpack.js.org/plugins/ignore-plugin/
        new webpack.IgnorePlugin({
            resourceRegExp: /^fs$/,
            contextRegExp: /copc/,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.glsl$/,
                loader: 'webpack-glsl-loader'
            }
        ]
    },
    devServer: {
    devMiddleware: {
        publicPath: '/dist/',
    },
    static: {
        directory: path.resolve(__dirname, './examples')
    },
    },
};
