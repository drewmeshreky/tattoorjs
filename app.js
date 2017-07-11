var app = angular.module('tattoor',
	['ui.router','artist-header','artist-contact','client-info','tattoo-info','reference-images']);

app.controller('TattoorController', function() {
});

app.config(['$urlRouterProvider', function ($urlRouterProvider) {
    // when there is an empty route, redirect to /artist   
    $urlRouterProvider.when('', '/artist/demo');
}]);

app.config(function($stateProvider) {
	
  var aboutState = {
    name: 'artist',
    url: '/artist/{id}',
    templateUrl: 'app/artist/artist.html'
  }

  $stateProvider.state(aboutState);
});
