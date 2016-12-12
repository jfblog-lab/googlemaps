var tab = [
	['Toulouse',43.604482,1.443962,441802],
	['Limoges',45.85,1.25,139150],
	['Paris',48.856578,2.351828,2243833]
];

var cityCircle;
var i;

function initialize(){
	var mapOptions={
		zoom: 6, // 0 à 21
		center: new google.maps.LatLng(47,2), // centre de la carte
		mapTypeId: google.maps.MapTypeId.ROADMAP, // ROADMAP, SATELLITE, HYBRID, TERRAIN
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	var i;

	for(i=0; i<tab.length;i++){
		var villes = tab[i];
		var city = villes[0];
		var Lat = villes[1], Lng = villes[2];
		var population = villes[3];

		var myLatLng = new google.maps.LatLng(Lat,Lng);
		var populationOptions = {
			map: map,
			center: myLatLng,
			title: city,
			radius: population/20,
			strokeColor:'#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35
		}

		cityCircle = new google.maps.Circle(populationOptions);
	}
}
