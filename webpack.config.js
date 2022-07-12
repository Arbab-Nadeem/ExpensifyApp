const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const publicPath = process.env.PUBLIC_URL || '/';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'test') {
	require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
	require('dotenv').config({ path: '.env.development' });
}
module.exports = (env) => {
	return {
		mode: env.production ? 'production' : 'development',
		entry: './src/index.js',
		output: {
			path: path.join(__dirname, 'public/', 'dist'),
			publicPath,
			filename: 'bundle.js',
		},
		resolve: {
			extensions: ['.js', '.jsx'],
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
				publicPath,
			},

			hot: false,
			compress: true,
			liveReload: true,
			historyApiFallback: true,
			open: true,
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			}),
			new webpack.DefinePlugin({
				//  Clien side environment variable : Node environment variables.
				'process.env.FIRBASE_API_KEY': JSON.stringify(
					process.env.FIRBASE_API_KEY
				),
				'process.env.FIRBASE_AUTH_DOMAIN': JSON.stringify(
					process.env.FIRBASE_AUTH_DOMAIN
				),
				'process.env.FIRBASE_DATABASE_URL': JSON.stringify(
					process.env.FIRBASE_DATABASE_URL
				),
				'process.env.FIRBASE_PROJECT_ID': JSON.stringify(
					process.env.FIRBASE_PROJECT_ID
				),
				'process.env.FIRBASE_STORAGE_BUCKET': JSON.stringify(
					process.env.FIRBASE_STORAGE_BUCKET
				),
				'process.env.FIRBASE_MESSAGING_SENDER_ID': JSON.stringify(
					process.env.FIRBASE_MESSAGING_SENDER_ID
				),
				'process.env.FIRBASE_APP_ID': JSON.stringify(
					process.env.FIRBASE_APP_ID
				),
			}),
		],
	};
};
