angular.module('client-info', [])
.directive("clientInfo", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/artist/templates/client-info.html',
	};
});