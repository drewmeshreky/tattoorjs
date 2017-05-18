angular.module('artist-contact', [])
.directive("artistContact", function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/artist-contact.html',
		controller: function () {
			this.faqs = [
				{ question: "How much do you charge?", answer: "Tattoor is free. You pay nothing!" },
				{ question: "How do you make money?", answer: "Right now, that's not our main focus. Our main focus is building a tool that artists love. If we do that, we know we'll find a way to build a sustainable business." },
				{ question: "How do I get started?", answer: "Talk to me! I can get you set up."},
			];
			
			this.referencePhotos = [];
		},
		controllerAs: 'artistContact'
	};
});
