function initMap() {
  const coordinates = { lat: 47.830, lng: 35.165 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: coordinates,
    zoomControl: true,
    //disableDefaultUI: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
  });
  const mapMarker = './img/g-logo.png';
  const marker = new google.maps.Marker({
    position: coordinates,
    map,
    icon: mapMarker,
  });
}