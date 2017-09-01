const svgoOptions = {
	plugins: [{
		removeDoctype: false
	}, {
		removeComments: false
	}, {
		cleanupNumericValues: {
			floatPrecision: 2
		}
	}, {
		convertColors: {
			names2hex: false,
			rgb2hex: false
		}
	}]
};

module.exports = {
	plugins: [
		require('postcss-inline-svg'),
		require('postcss-svgo')(svgoOptions),
		require('autoprefixer')
	]
}