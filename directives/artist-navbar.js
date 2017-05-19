angular.module('artist-navbar', [])
.directive("artistNavbar", function() {
	return {
		restrict: 'E',
      	templateUrl: 'templates/directives/artist-navbar.html',
	};
});
