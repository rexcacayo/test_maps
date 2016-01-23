//AMBIENTE DE TRABAJO
//trabajando en local
//var dir= "http://127.0.0.1/mobile/ifa/php/";
//trabajando en servidor'
//var dir = "http://listamercado.ricardolugaresi.com.ve/php/"
////////////////////////////////////////////////////////
/*function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.452, lng: -3.688},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('TU PUNTO DE INICIO');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}*/
var marker1, marker2;
var poly, geodesicPoly;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: new google.maps.LatLng(40.452, -3.68),
  });

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      document.getElementById('info'));

  marker1 = new google.maps.Marker({
    map: map,
    draggable: true,
    position: {lat: 40.452, lng: -3.68}
	
  });
  
	yo();
	
	marker2 = new google.maps.Marker({
    map: map,
    draggable: true,
    position:latlon,
  });
	
  var bounds = new google.maps.LatLngBounds(
      marker1.getPosition(), marker2.getPosition());
  map.fitBounds(bounds);

  google.maps.event.addListener(marker1, 'position_changed', update);
  google.maps.event.addListener(marker2, 'position_changed', update);

  poly = new google.maps.Polyline({
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 3,
    map: map,
  });

  geodesicPoly = new google.maps.Polyline({
    strokeColor: '#CC0099',
    strokeOpacity: 1.0,
    strokeWeight: 3,
    geodesic: true,
    map: map
  });

  update();
}

function update() {
  var path = [marker1.getPosition(), marker2.getPosition()];
  poly.setPath(path);
  geodesicPoly.setPath(path);
  var heading = google.maps.geometry.spherical.computeHeading(path[0], path[1]);
  document.getElementById('heading').value = heading;
  document.getElementById('origin').value = path[0].toString();
  document.getElementById('destination').value = path[1].toString();
}

var x = document.getElementById("demo");

function yo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion);
    } else { 
        x.innerHTML = "no hay geolocalizacion.";
    }
}

function posicion(position) {
	var lat_yo = position.coords.latitude;
	var long_yo = position.coords.longitude;
	latlon=new google.maps.LatLng(lat_yo, long_yo); 
}
