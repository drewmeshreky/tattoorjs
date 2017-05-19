angular.module('artist-navbar', [])
.directive("artistNavbar", function() {
	return {
		restrict: 'E',
		controller: function() {
			$(".header").sticky();	
		},
      	templateUrl: 'templates/directives/artist-navbar.html',
	};
});
