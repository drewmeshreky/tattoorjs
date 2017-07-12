angular.module('artist-header', [])
.directive("artistHeader", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/appointment/templates/artist-header.html',
	};
});