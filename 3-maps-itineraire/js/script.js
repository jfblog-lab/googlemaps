function initialize(){
	var mapOptions={
		zoom: 6, // 0 à 21
		center: new google.maps.LatLng(47,2), // centre de la carte
		mapTypeId: google.maps.MapTypeId.ROADMAP, // ROADMAP, SATELLITE, HYBRID, TERRAIN
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var myLatLng = new google.maps.LatLng(43.525,1.826944);
	var marker = new google.maps.Marker ({
		position: myLatLng,
		map: map,
		titre: "Auriac-sur-vendinelle"
	});

	var myLatLng2 = new google.maps.LatLng(43.6,2.25);
	var marker2 = new google.maps.Marker ({
		position: myLatLng2,
		map: map,
		titre: "Castres"
	});

	//trajet 1
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer({
		'map': map
	});

	var request = {
		origin: myLatLng,
		destination: myLatLng2,
		travelMode: google.maps.DirectionsTravelMode.DRIVING,
		unitSystem: google.maps.DirectionsUnitSystem.METRIC
	};

	directionsService.route(request, function(response, status){
		if(status == google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(response);
			directionsDisplay.suppressMarkers = false;
			directionsDisplay.setOptions({
				polylineOptions: {strokeColor: '#008000'},
				preserveViewport: false
			});
		}
	});

	//trajet 2
	var directionsService2 = new google.maps.DirectionsService();
	var directionsDisplay2 = new google.maps.DirectionsRenderer({
		'map': map
	});

	var request2 = {
		origin: myLatLng,
		destination: myLatLng2,
		travelMode: google.maps.DirectionsTravelMode.BICYCLING,
		unitSystem: google.maps.DirectionsUnitSystem.METRIC
	};

	directionsService2.route(request2, function(response, status){
		if(status == google.maps.DirectionsStatus.OK){
			directionsDisplay2.setDirections(response);
			directionsDisplay2.suppressMarkers = false;
			directionsDisplay2.setOptions({
				polylineOptions: {strokeColor: '#00FF00'},
				preserveViewport: true
			});
		}
	});
}
