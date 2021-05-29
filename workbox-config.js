module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{html,xml,css,ico,png,svg,js,json,txt}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
	],
	swDest: 'public/sw.js',

	skipWaiting: true,

	runtimeCaching: [{
	// Match any request that ends with .png, .jpg, .jpeg or .svg.
	urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

	// Apply a cache-first strategy.
	handler: 'CacheFirst',

		},
 ],
};
