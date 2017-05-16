angular.module('artist-header', [])
.directive("artistHeader", function() {
	return {
		restrict: 'E',
      	templateUrl: 'templates/artist-header.html',
	  	controller: function () {
			this.name = 'Tattoor';
			this.description = 'Online appointment requests built for tattoo artists';
			this.image = 'https://scontent-dft4-3.cdninstagram.com/t51.2885-19/s320x320/18300017_424845637895118_1725354621263675392_a.jpg';
		
			$(".header").sticky();
	  	},
	  controllerAs: 'ctrl',
	};
});
