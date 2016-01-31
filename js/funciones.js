function map2(){
var lat1;
var lon1;
var lat2;
var lon2;

url = GMaps.staticMapURL({
  size: [610, 390],
  lat: 40.452,
  lng: -3.680,
  markers:[{lat: 40.452, lng:  -3.688, color: 'blue'}],
});

GMaps.geolocate({
	success: function(position){
		lat1=position.coords.latitude;
		lon1=position.coords.longitude;
		lat2=40.452;
		lon2=-3.680;
		Distancia = Dist(lat1, lon1, lat2, lon2) + "Km";
		$('#pos').html(Distancia);
    },
    error: function(error){
    	alert('Geolocation failed: '+error.message);
    },
    not_supported: function(){
    	alert("No soporta geolocalizacion");
    }
});
gps_nativo();
$('<img/>').attr('src', url).appendTo('#map');
}

function gps_nativo() {
	var plataforma;
	if($.browser.device = (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()))){
		plataforma="http://maps.apple.com/maps?saddr=Current%20Location&daddr=Estadio+Santiago+Bernabeu";
	}
	if($.browser.device = (/android/i.test(navigator.userAgent.toLowerCase()))){
		plataforma="http://maps.google.com/maps?q=40.4530575,-3.690185";
	}
	
	document.getElementById("url_nativo").href=plataforma;
}

function Dist(lat1, lon1, lat2, lon2)
  {
  rad = function(x) {return x*Math.PI/180;}

  var R     = 6378.137;                     //Radio de la tierra en km
  var dLat  = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;

  return d.toFixed(3);                     
  
}


