angular.module('artist-navbar', [])
.directive("artistNavbar", function() {
	return {
		restrict: 'E',
      	templateUrl: 'templates/artist-navbar.html',
	};
});
