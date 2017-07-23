export default function (config, env, helpers) {

	var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
	var Visualizer = require('webpack-visualizer-plugin');

	plugins: [new BundleAnalyzerPlugin(), new Visualizer({filename: '/Users/endamccormack/Documents/git/GOV/GDS/digital-escape-velocity/statistics.html'})];
}
