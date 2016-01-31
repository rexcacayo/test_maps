function map2(){
var lat1;
var lon1;
var lat2;
var lon2;
//propiedad para utilizar el mapacomo una imagen, para hacerlo estatico
url = GMaps.staticMapURL({
  size: [610, 390],
  lat: 40.4530541,
  lng: -3.68834450,
  markers:[{lat: 40.4530541, lng: -3.68834450, color: 'blue'}],
});
///geo localizacion, da posicion actual
GMaps.geolocate({
	success: function(position){
		lat1=position.coords.latitude;
		lon1=position.coords.longitude;
		lat2=40.4530541;
		lon2=-3.68834450;
//calculo de distancia		
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
//llamado de funcion de href
gps_nativo();
$('<img/>').attr('src', url).appendTo('#map');
}
//funcion que permite determinar el tipo de sistema y modificar el atributo href de la etiqueta <a> para adaptar la instruccion 
//al tipo de sistema
function gps_nativo() {
	var plataforma;
	if($.browser.device = (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()))){
		plataforma="http://maps.apple.com/maps?saddr=Current%20Location&daddr=Estadio+Santiago+Bernabeu";
	}
	if($.browser.device = (/android/i.test(navigator.userAgent.toLowerCase()))){
		plataforma="http://maps.google.com/maps?q=40.4530541,-3.68834450";
	}
	
	document.getElementById("url_nativo").href=plataforma;
}
///calculo sde distancia entre coordenadas
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


