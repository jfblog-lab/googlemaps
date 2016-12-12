function initialize() {
	var styles = [ { "featureType": "landscape.man_made", "stylers": [ { "visibility": "on" }, { "color": "#000000" } ] },{ "featureType": "water", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] },{ "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "stylers": [ { "color": "#ff2b3c" }, { "saturation": -54 } ] } ];

	var styledMap = new google.maps.StyledMapType(styles, {name: "Gmap stylée"});

	var mapOptions = {
		center : new google.maps.LatLng(43.604482, 1.443962), // Toulouse
		zoom : 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	map.mapTypes.set('map_style',styledMap);
	map.setMapTypeId('map_style');
}

google.maps.event.addDomListener(window, 'load', initialize);
