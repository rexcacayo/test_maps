function map1(){
var map;
$(document).ready(function(){
  var map = new GMaps({
    el: '#map',
    lat: 51.5073346,
  	lng: -0.1276831,
  });

  GMaps.geolocate({
    success: function(position){
      map.setCenter(position.coords.latitude, position.coords.longitude);

      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: 'Ubicacion Actual.',
        infoWindow: {
          content: '<p>Ubicacion Actual!</p>'
        }
      });
    },
    error: function(error){
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function(){
      alert("No soporta geolocalizacion");
    }
  });
});

}

function map2(){
var map = new GMaps({
    el: '#map',
    lat: 40.452,
    lng: -3.688,
	zoom: 13,
    zoomControl : true,
    zoomControlOpt: {
        style : 'SMALL',
        position: 'TOP_LEFT'
    },
    panControl : false,
  });
map.addMarker({
      lat: 40.452,
      lng: -3.688,
      title: 'Santiago Bernabéu',
      infoWindow: {
        content: '<p>Santiago Bernabéu de Yeste (Almansa, Albacete, 8 de junio de 1895 – Madrid, 2 de junio de 1978) fue un futbolista, entrenador y presidente del Real Madrid ....</p>' }
    });

}

function map3(){
var map;
$(document).ready(function(){
  var map = new GMaps({
    el: '#map',
    lat: 40.452,
    lng: -3.688,
    zoom:8
  });

  GMaps.geolocate({
    success: function(position){
      map.setCenter(position.coords.latitude, position.coords.longitude);
       map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [10.217, -67.554],
        travelMode: 'driving',
        strokeColor: '#000',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
    },
    error: function(error){
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function(){
      alert("Your browser does not support geolocation");
    }
  });
});}