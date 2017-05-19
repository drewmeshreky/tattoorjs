angular.module('artist-location', [])
.directive("artistLocation", function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/artist-location.html',
		controller: function() {

			this.location = { name: 'Tattoor Main Office', address: '1631 Camino De Salmon St, Corona, CA 92881', phoneNumber: '951.737.9963'};
			this.lat = 33.8242518;
			this.lng = -117.5469268;
		
			var styles = [{
				"featureType": "landscape",
			    "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }]
			}, {
				"featureType": "poi",
				"stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }]
			}, {
				"featureType": "road.highway",
				"stylers": [{ "saturation": -100 }, { "visibility": "simplified" }]
			}, {
		        "featureType": "road.arterial",
		        "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }]
		    }, {
		        "featureType": "road.local",
		        "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }]
		    }, {
		        "featureType": "transit",
		        "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }]
		    }, {
		        "featureType": "administrative.province",
		        "stylers": [{ "visibility": "off" }]
		    }, {
		        "featureType": "water", "elementType": "labels",
		        "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }]
		    }, {
		        "featureType": "water", "elementType": "geometry",
		        "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }]
		    }];

		    map = new GMaps({
		        el: '#map',
		        lat: this.lat,
		        lng: this.lng,
		        zoomControl: true,
		        zoomControlOpt: {
		            style: 'SMALL',
		            position: 'TOP_LEFT'
		        },
		        panControl: false,
		        streetViewControl: false,
		        mapTypeControl: false,
		        overviewMapControl: false,
		        scrollwheel: false,
		        draggable: false,
		        styles: styles
		    });

		    var image = 'images/marker.png';

		    map.addMarker({
		        lat: this.lat,
		        lng: this.lng,
		        icon: image,
		        title: '',
		        infoWindow: {
					content: '<p><strong>' + this.location.name + '</strong><br/>' + this.location.address + '<br/>' + this.location.phoneNumber + '</p>'
		        }
		    });
		},
	  controllerAs: 'artistLocation',
	};
});
