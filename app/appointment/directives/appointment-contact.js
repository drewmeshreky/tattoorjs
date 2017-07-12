angular.module('appointment-contact', [])
.directive("appointmentContact", function() {
	return {
		restrict: 'E',
      	templateUrl: 'app/appointment/templates/appointment-contact.html',
	};
});