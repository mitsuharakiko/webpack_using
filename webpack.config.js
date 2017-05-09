var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:{
		app: './src/app.js'
	},
	output: {
		filename: 'js/[name]-bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: /src/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index-bundle.html',
			template: './index.html',
			inject: 'body'
		})
	]
}