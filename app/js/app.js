var myapp= angular.module('myapp',['ngRoute', 'myappControllers','myappConfig']);

myapp.config(function($routeProvider, config){
	$routeProvider.when('/',
		{
			templateUrl: config.base_url+ '/partials/home.html',
			controller: 'HomeController'
		}

	).when('/widgets',
		{
			templateUrl: config.base_url+ '/partials/widgets.html',
			controller: 'WidgetsController'
		}
	).otherwise({
		redirectTo: '/'
	});
});

myapp.run(function($rootScope){
	$rootScope.$on('$routeChangeStart', function (event, next) {

	});
});