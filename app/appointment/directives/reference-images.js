angular.module('reference-images', [])
.directive("referenceImages", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/appointment/templates/reference-images.html',
	};
});