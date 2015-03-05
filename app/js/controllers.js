var myappControllers= angular.module('myappControllers',[]);

myappControllers.controller('HomeController',function($rootScope,$scope){
	$rootScope.menu="home";
});

myappControllers.controller('WidgetsController',function($rootScope,$scope){
	$rootScope.menu="widgets";
});