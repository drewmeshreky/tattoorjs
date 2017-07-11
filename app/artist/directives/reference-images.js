angular.module('reference-images', [])
.directive("referenceImages", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/artist/templates/reference-images.html',
	};
});