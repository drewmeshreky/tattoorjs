var module = angular.module('tattoor');

var ArtistController = function() {

	this.artist = {
		name: 'Drew Meshreky',
		description: 'Online appointment requests built for tattoo artists',
		image: 'https://scontent-dft4-3.cdninstagram.com/t51.2885-19/s320x320/18300017_424845637895118_1725354621263675392_a.jpg'
	};
	
	this.faqs = [
		{ question: "How much do you charge?", answer: "Tattoor is free. You pay nothing!" },
		{ question: "How do you make money?", answer: "Right now, that's not our main focus. Our main focus is building a tool that artists love. If we do that, we know we'll find a way to build a sustainable business." },
		{ question: "How do I get started?", answer: "Talk to me! I can get you set up."},
	];
	
	this.referencePhotos = [];

	this.location = { name: 'Tattoor Main Office', address: '1631 Camino De Salmon St, Corona, CA 92881', phoneNumber: '951.737.9963'};
	this.lat = 33.8242518;
	this.lng = -117.5469268;
};

module.controller('ArtistController', ArtistController);
