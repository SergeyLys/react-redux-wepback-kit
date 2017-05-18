const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: __dirname + '/client/css',
    entry: {
      styles: "./styles.scss",
    },

    output: {
      path:           __dirname + '/public/css/',
      publicPath:    'css/',
      filename: '[name].css'
    },

    devtool: 'cheap-module-eval-source-map',

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass",
                exclude: [/node_modules/, /public/]
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
            },
            __DEVELOPMENT__: true,
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
};
