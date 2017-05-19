angular.module('artist-contact', [])
.directive("artistContact", function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/artist-contact.html',
		controller: 'ArtistController',
		controllerAs: 'artistCtrl'
	};
});
