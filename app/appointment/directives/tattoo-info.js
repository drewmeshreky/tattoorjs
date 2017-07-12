angular.module('tattoo-info', [])
.directive("tattooInfo", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/appointment/templates/tattoo-info.html',
	};
});