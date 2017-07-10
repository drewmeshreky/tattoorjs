angular.module('artist-contact', [])
.directive("artistContact", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/artist/templates/artist-contact.html',
	};
});