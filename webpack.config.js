const path = require('path');

module.exports = {
	entry: [
		'bootstrap-loader',
		'./static/js/src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: 'js/built/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: [
								'es2015',
								'stage-2',
								'react'
							]
						}
					},
					{
						loader: 'eslint-loader'
					}
				]
			},
			{ test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
			{ test: /\.(ttf|eot)$/, loader: 'file-loader' }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'static')
	}
};
