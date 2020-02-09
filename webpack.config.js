const path = require('path');

module.exports = {
	entry: {
		component: './src/index.js'
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}, {
				test: /\.html$/,
				exclude: /(node_modules)/,
				use: [
					'html-loader'
				]
			}, {
				test: /\.s?css$/,
				exclude: /(node_modules)/,
				use: [
					'to-string-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devtool: 'none'
}
