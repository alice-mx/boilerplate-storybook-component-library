const path = require('path');

module.exports = {
	output: {
		filename: 'index.js',
	},
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
