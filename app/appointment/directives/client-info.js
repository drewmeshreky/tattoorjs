angular.module('client-info', [])
.directive("clientInfo", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/appointment/templates/client-info.html',
	};
});