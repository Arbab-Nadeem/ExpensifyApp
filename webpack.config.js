const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	// entry: './src/playground/test.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	target: 'web',
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		hot: false,
		compress: true,
		liveReload: true,
		historyApiFallback: true,
	},
};
