const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const production = process.argv.indexOf('-p') !== -1;

module.exports = {

	context: path.resolve(__dirname, './src'),

	entry: {
		app: './js/app.js'
	},

	output: {
		path: path.resolve(__dirname, './public'),
		filename: '[name].js',
	},

	devtool: production ? false : '#inline-source-map',

	devServer: {
		contentBase: path.resolve(__dirname, './public')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: { presets: ['es2015'] }
					}
				]
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader?url=false', 'postcss-loader', 'less-loader']
				})
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('style.css'),
		/*new BrowserSyncPlugin(
            {
                proxy: 'http://razvitiekam.org/',
                tunnel: true,
                files: ['public/*', 'public/index.php']
            },
            {
                reload: false
            }),*/
		new SpriteLoaderPlugin(),
		/*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),*/
	]

};

if (production) {

	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);

}