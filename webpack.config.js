var path = require('path')
var webpack = require('webpack');

module.exports = {
	
	entry: [
		'webpack-hot-middleware/client',
		'./src/index'
	],

	output: {
		path:'/dist',
		publicPath: '/',
		filename: 'bundle.js',
	},

	module: {
		loaders: [
			{
				loaders: ['react-hot', 'babel'], //добавили loader 'react-hot'
				include: [
					path.resolve(__dirname, "src"),
				],
				test: /\.js$/,
				plugins: ['transform-runtime'],
			}
		]
	},
	
	devServer: {
		host: '0.0.0.0',
		contentBase: './dist/',
		inline: true,
		port: 8080
	},
	
	plugins: [
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	]
}
