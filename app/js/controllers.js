var myappControllers= angular.module('myappControllers',[]);

myappControllers.controller('HomeController',function($rootScope,$scope){
	$rootScope.menu="home";
});

myappControllers.controller('WidgetsController',function($rootScope,$scope){
	$rootScope.menu="widgets";
});

myappControllers.controller('MenuController',function($scope){
	$scope.help_click= function(){
		BootstrapDialog.show({
            title: 'More dialog sizes',
            message: 'Hi Apple!',
            buttons: [{
                label: 'Normal',
                action: function(dialog){
                    dialog.setTitle('Normal');
                    dialog.setSize(BootstrapDialog.SIZE_NORMAL);
                }
            }, {
                label: 'Small',
                action: function(dialog){
                    dialog.setTitle('Small');
                    dialog.setSize(BootstrapDialog.SIZE_SMALL);
                }
            }, {
                label: 'Wide',
                action: function(dialog){
                    dialog.setTitle('Wide');
                    dialog.setSize(BootstrapDialog.SIZE_WIDE);
                }
            }, {
                label: 'Large',
                action: function(dialog){
                    dialog.setTitle('Large');
                    dialog.setSize(BootstrapDialog.SIZE_LARGE);
                }
            }]
        });
	}
});