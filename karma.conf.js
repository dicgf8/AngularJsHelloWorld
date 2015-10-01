module.exports = function (config) {
	config.set({
		basePath: '.',
		files: [
			"js/libs/angular.min.js",
			"js/libs/angular-mocks.js",
			"js/libs/angular-route.min.js",
			"js/*.js",
			"js/spec/**/*Spec.js"
		],
		exclude: [
		],
		autoWatch: true,
		frameworks: [
			"jasmine"
		],
		browsers: [
			"Chrome"
		],
		plugins: [
			"karma-junit-reporter",
			"karma-chrome-launcher",
			"karma-firefox-launcher",
			"karma-jasmine"
		]
	});
};