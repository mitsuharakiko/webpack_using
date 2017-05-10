var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: __dirname,
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
				exclude: path.resolve(__dirname, 'node_modules'),
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			},
			// {
			// 	test: /\.css$/,
			// 	loader: 'postcss-loader',
			// 	options: {
			// 	    config: {
			// 	      	path: 'postcss.config.js'
			// 	    }
			//   	}
			// },
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index-bundle.html',
			template: './index.html',
			inject: 'body',
			title: ''
		})
	]
}