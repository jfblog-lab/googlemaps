function initialize() {
	var myLatLng = new google.maps.LatLng(48.856578, 2.351828);
	var mapOptions = {
		zoom : 12,
		center: myLatLng
	}

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	// Moyen de transport : voiture
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);

	// Moyen de transport : METRO et RER
	var transitLayer = new google.maps.TransitLayer();
	transitLayer.setMap(map);

	// Moyen de transport : vélo
	var bikeLayer = new google.maps.BicyclingLayer();
	bikeLayer.setMap(map);
	
}

google.maps.event.addDomListener(window, 'load', initialize);
