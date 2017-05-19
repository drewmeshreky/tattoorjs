angular.module('artist-header', [])
.directive("artistHeader", function() {
	return {
		restrict: 'E',
      	templateUrl: 'templates/directives/artist-header.html',
	  	controller: 'ArtistController',
		controllerAs: 'artistCtrl',
	};
});
