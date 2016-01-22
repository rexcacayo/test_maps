//AMBIENTE DE TRABAJO
//trabajando en local
//var dir= "http://127.0.0.1/mobile/ifa/php/";
//trabajando en servidor'
//var dir = "http://listamercado.ricardolugaresi.com.ve/php/"
////////////////////////////////////////////////////////
function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
	$('#map1').html(map);
	$('#map1').trigger('create');
	$.mobile.changePage("#mapas", {transition: "slideup"});
}