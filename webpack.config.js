var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig  = new HtmlWebpackPlugin({
	template: __dirname+'/src/index.html',
	filename: 'index.html',
	inject:'body'
});
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname +'/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query:{
						presets:['es2015', 'react'],
						plugins: ['transform-decorators-legacy']
				}
			}
		]
	},
	plugins:[
		HTMLWebpackPluginConfig,
		new LiveReloadPlugin()
	]
}
