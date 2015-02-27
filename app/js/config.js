var config= angular.module('myappConfig',[]);

config.constant('config',{
	'base_url': window.location.origin+window.location.pathname,
});
