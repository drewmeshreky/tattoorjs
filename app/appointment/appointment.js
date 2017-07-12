var module = angular.module('tattoor');

var AppointmentController = function($stateParams, $http, $scope) {

	this.requestStates = {
	    UNDEFINED: 0,
	    SENT: 1,
	    FAILED: 2
	};
	
	this.getArtist = function(artistId) {
		var self = this;
		
		var artistUrl = `https://tattoor.azurewebsites.net/api/artist/${artistId}?code=X1NU5Y3CMgr59UWcUqRkl7k3HUGvy9rSE5W6oeGyi6Kl/MoaLWw5uA==`;
		$http.get(artistUrl)
		.then(
			function(response) {
				self.appointmentRequest.artist = response.data;
			},
			function(error) {
				self.appointmentRequest.artist = null;
			}
		);
	}
	
	this.init = function() {
		
		this.appointmentRequest = {};
		this.getArtist($stateParams.artistId);
		this.appointmentRequest.images = [];

		this.appointmentRequest.state = this.requestStates.UNDEFINED;
		this.responseMessage = '';

		this.placementOptions = ["Open to Suggestion","Head","Neck","Chest","Back","Shoulder","Upper Arm","Forearm","Stomach","Thigh","Calf","Other"];
		this.styleOptions = ["Black & Gray","Color","Open to Suggestion"];
		this.budgetOptions = ["$100","$100-$250","$250-$500","$500-$1000","$1000-$2000","$2000-$5000","$5000+"];
				
		this.fsClient = filestack.init('A77HiFpIdSIuKv3ihmKw7z');
	};
		
	this.showPicker = function () {
		var self = this;
		
		self.fsClient.pick({
			accept: 'image/*',
			maxFiles: 5
		})
		.then(
			function(result) {
				result.filesUploaded.forEach(function(fileUploaded) {
					self.appointmentRequest.images.push(fileUploaded);
					$scope.$apply();
				})			
			}
		);
	}

	this.submitRequest = function() {
		var self = this;
		
		$http.post(
			"https://tattoor.azurewebsites.net/api/ApptRequest?code=UBg8xPsHOhFccQhQMjrOKuTPLQWRPzFimeaQ5H6JMt8wwOryUZrh4w==", self.appointmentRequest)
		.then(
			function(response) {
				self.appointmentRequest.state = self.requestStates.SENT;
				self.responseMessage = response.data;
			},
			function(error) {
				self.appointmentRequest.state = self.requestStates.FAILED;
				self.responseMessage = error.data.message;
			}
		);
	}
	
	this.init();
};

module.controller('AppointmentController', AppointmentController);
