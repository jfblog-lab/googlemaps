function initialize(){
	var mapOptions={
		zoom: 6, // 0 à 21
		center: new google.maps.LatLng(47,2), // centre de la carte
		mapTypeId: google.maps.MapTypeId.ROADMAP, // ROADMAP, SATELLITE, HYBRID, TERRAIN
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var image = "img/marker.png";
	var myLatLng = new google.maps.LatLng(43.604482,1.443962);
	var marker = new google.maps.Marker ({
		position: myLatLng,
		map: map,
		icon: image,
		titre: "Toulouse"
	});
}
