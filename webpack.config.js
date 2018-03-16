const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{ 
				test: /\.(png|jpe?g|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name]-[hash:6].[ext]',
							outputPath: 'img'
						}
					}
				]
			}
	 ]
},
}