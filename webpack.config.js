var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

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
			'react': path.join(node_modules_dir, './react/dist/react.min.js'),
			'react-dom': path.join(node_modules_dir, './react-dom/dist/react-dom.min.js'),
			'fetch': path.join(node_modules_dir, './whatwg-fetch/fetch.js')
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
			{ test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react', 'es2015'] } },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader") },
			{ test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
			{ test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' }
		]
	},
	postcss: [
		autoprefixer({ browsers: ['last 2 versions'] })
	],
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common.js', 2),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: { warnings: false },
			mangle: false
		}),
		new ExtractTextPlugin('[name].css')
	]
};

config.addVendor('react', path.resolve(node_modules_dir, './react/dist/react.min.js'));

module.exports = config;
