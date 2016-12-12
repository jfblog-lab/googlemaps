$(function() {
	$("#map").gMap({
		zoom: 6,
		latitude: 47,
		longitude: 2,
		markers: [
			{ address: "Blois, France", html: "Ville de naissance" },
			{ address: "Toulouse, France", html: "La ville rose" },
			{ 
				latitude: 48.856578,
				longitude: 2.351828,
				html: "Paris,<br />Capitale de la France",
				icon: { image: "images/gmap_pin_orange.png",
                                      iconsize: [48, 48],
                                      iconanchor: [24,48],
                                      infowindowanchor: [24, 12]
				}
			}
		],
		maptype: G_NORMAL_MAP, // G_NORMAL_MAP, G_SATELLITE_MAP, G_HYBRID_MAP, G_DEFAULT_MAP_TYPES, G_PHYSICAL_MAP
		controls: false, // panneau de contrôle
		scrollwheel: false // permet le zoom
	});
});
