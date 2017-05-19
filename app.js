var app = angular.module('tattoor',
	['ui.router','artist-navbar','artist-header','artist-contact','artist-location']);

app.controller('TattoorController', function() {
});

app.config(['$urlRouterProvider', function ($urlRouterProvider) {
    // when there is an empty route, redirect to /home   
    $urlRouterProvider.when('', '/home');
}]);

app.config(function($stateProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'templates/routes/home.html'
  }

  var aboutState = {
    name: 'artist',
    url: '/artist/{id}',
    templateUrl: 'templates/routes/artist.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
});
