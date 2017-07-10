angular.module('artist-header', [])
.directive("artistHeader", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/artist/templates/artist-header.html',
	};
});