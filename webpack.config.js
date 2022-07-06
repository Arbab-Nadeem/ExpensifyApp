const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	return {
		mode: env.production ? 'production' : 'development',
		entry: './src/index.js',
		output: {
			path: path.join(__dirname, 'public/', 'dist'),
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
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: { sourceMap: true },
						},
						{
							loader: 'sass-loader',
							options: { sourceMap: true },
						},
					],
				},
			],
		},

		target: 'web',
		devtool: env.production ? 'source-map' : 'inline-source-map',
		devServer: {
			static: {
				directory: path.join(__dirname, 'public'),
				// publicPath: '/',
			},
			/* client: {
				overlay: true,
				progress: true,
				reconnect: true,
			}, */
			// hot: false,
			// compress: true,
			// liveReload: true,
			historyApiFallback: true,
			open: true,
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			}),
		],
	};
};
