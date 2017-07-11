var module = angular.module('tattoor');

var ArtistController = function($http) {

	this.requestStates = {
	    UNDEFINED: 0,
	    SENT: 1,
	    FAILED: 2
	};
	
	this.init = function() {
		this.artist = {
			name: 'Demo Account',
			description: 'This is a demo of Tattoor, the online appointment app built for tattoo artists. Fill out the form to see how it works.',
		};		

		this.requestState = this.requestStates.UNDEFINED;
		this.reponseMessage = '';

		this.placementOptions = ["Open to Suggestion","Head","Neck","Chest","Back","Shoulder","Upper Arm","Forearm","Stomach","Thigh","Calf","Other"];
		this.styleOptions = ["Black & Gray","Color","Open to Suggestion"];
		this.budgetOptions = ["$100","$100-$250","$250-$500","$500-$1000","$1000-$2000","$2000-$5000","$5000+"];
		
		this.referenceImages = [];
		
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
					console.log(JSON.stringify(fileUploaded));
					console.log(fileUploaded.url);
					self.referenceImages.push(fileUploaded);
				})			
			}
		);
	}

	this.submitRequest = function(request) {
		var self = this;
		
		$http.post(
			"https://tattoor.azurewebsites.net/api/ApptRequest?code=UBg8xPsHOhFccQhQMjrOKuTPLQWRPzFimeaQ5H6JMt8wwOryUZrh4w==", request)
		.then(
			function(response) {
				self.requestState = self.requestStates.SENT;
				self.reponseMessage = response.data;
			},
			function(error) {
				self.requestState = self.requestStates.FAILED;
				self.reponseMessage = error.data.message;
			}
		);
	}
	
	this.init();
};

module.controller('ArtistController', ArtistController);
