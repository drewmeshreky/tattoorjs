angular.module('tattoo-info', [])
.directive("tattooInfo", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/artist/templates/tattoo-info.html',
	};
});