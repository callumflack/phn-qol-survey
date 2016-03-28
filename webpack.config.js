var webpack = require('webpack');
var path = require('path');

var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path; 
        this.module.noParse.push(path); 
    },
    context: __dirname,
    entry: { 
        app: process.env.NODE_ENV === 'production' ? ['./app/main.js'] : ['webpack/hot/dev-server', './app/main.js'] 
    }, 
    resolve: {
        alias: {
            'react': bower_dir + '/react/react.min.js',
            'react-dom': bower_dir + '/react/react-dom.min.js'
        }
    },
    output: {
        publicPath: '/', 
        path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist' : './build'), 
        filename: 'bundle.js' 
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js', 2)
    ]
};

config.addVendor('react', path.resolve(bower_dir, 'react/react.min.js'));

module.exports = config;