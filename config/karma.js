module.exports= function(grunt,constants){
	return {
		options: {
			files: [
		        'node_modules/angular/angular.js',
		        'node_modules/angular-mocks/angular-mocks.js',
		        'node_modules/angular-route/angular-route.js',
		        'app/**/*.js',
		        'test/**/*Spec.js'
		      ],
		      runnerPort: 9999,
		      browsers: ['Chrome'],
		      logLevel: 'INFO',
		      frameworks: ['jasmine']
		},
		dev: {
			singleRun: false,
			autoWatch: true
		},
		dist: {
			singleRun: true
		}
	}
}