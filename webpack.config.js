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
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.tpl$/,
				loader: 'ejs-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				loaders: [
					'url-loader?limit=2000&name=assets/[name]-[hash:5].[ext]'
				]
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