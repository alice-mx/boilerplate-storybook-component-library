const path = require('path');

module.exports = {
	output: {
		filename: 'index.js',
	},
	mode: 'development',
	entry: './src/index.ts',
	resolve: { extensions: ['.ts', '.tsx', '.js'] },
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
			},
		],
	},
};
