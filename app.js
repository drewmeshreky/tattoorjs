var app = angular.module('tattoor',
	['ui.router','artist-header','appointment-contact','client-info','tattoo-info','reference-images']);

app.controller('TattoorController', function() {
});

app.config(['$urlRouterProvider', function ($urlRouterProvider) {
    // when there is an empty route, redirect to /artist   
    $urlRouterProvider.when('', '/appointment/demo');
}]);

app.config(function($stateProvider) {
	
  var appointmentState = {
    name: 'appointment',
    url: '/appointment/{artistId}',
    templateUrl: 'app/appointment/appointment.html'
  }

  $stateProvider.state(appointmentState);
});
