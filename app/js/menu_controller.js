var myappControllers= angular.module('myappControllers');

myappControllers.controller('MenuController',function($scope, $route){

	$scope.isRoute = function (r) {
      if (!$route.current.title === 'undefined') {
        return $route.current.title.substr(0, r.length) === r;
      }
    };

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