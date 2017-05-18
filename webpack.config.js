require('babel-polyfill').default;
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');
const webpack = require('webpack');
const TARGET = process.env.npm_lifecycle_event;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const development = require('./webpack/dev.config.js');
process.env.BABEL_ENV = TARGET;

const common = {
    entry:   {
        home:          './client/js/home',
        about:         './client/js/about'
    },
    output:  {
        path:           __dirname + '/public/build/',
        publicPath:    'build/',
        filename:      '[name].js',
        chunkFilename: '[id].js',
        library:       '[name]'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/, /public/]
            },

            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },

    postcss: (webpack) => {
        return [
            autoprefixer({
                browsers: ['last 2 versions'],
            }),
            postcssImport({
                addDependencyTo: webpack,
            }),
        ];
    }
};

const development = {

    context: __dirname + '/client/css',
    entry: {
        styles: "./styles.scss",
    },

    output: {
        path:           __dirname + '/public/build/',
        publicPath:    'build/',
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


var config = [];



if (TARGET === 'start' || !TARGET) {
    config.push(common, development);
    // module.exports = merge(development, common);
    module.exports = config;
}
//
// if (TARGET === 'build' || !TARGET) {
//     module.exports = merge(common);
// }