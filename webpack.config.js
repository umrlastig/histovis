const path = require('path');

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
  devServer: {
    devMiddleware: {
        publicPath: '/dist/',
    },
    static: {
        directory: path.resolve(__dirname, './examples')
    },
  },
};
