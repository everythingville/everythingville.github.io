// Grass
const map = L.map('map', {
    crs: L.CRS.Simple, // REMINDER: CRS.Simple coordinates are in [y,x] format (L.latLng is opposite order from typical coordinates)
    minZoom: -1
});
var  bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('assets/img/grass-bkgd.png', bounds).addTo(map);
map.fitBounds(bounds);

// Music store
var musicStore = L.latLng([750, 250]);
L.marker(musicStore).addTo(map).bindPopup('Music Store');

// Gym
var gym = L.latLng([750, 500]);
L.marker(gym).addTo(map).bindPopup('Gym');

// Restaurant
var restaurant = L.latLng([750, 750]);
L.marker(restaurant).addTo(map).bindPopup('Restaurant');

// Home
var home = L.latLng([500, 250]);
L.marker(home).addTo(map).bindPopup('Home');

// Town hall
var townHall = L.latLng([500, 500]);
L.marker(townHall).addTo(map).bindPopup('Town Hall');

// Post office
var postOffice = L.latLng([500, 750]);
L.marker(postOffice).addTo(map).bindPopup('Post Office');

// Hardware store
var hardwareStore = L.latLng([250, 250]);
L.marker(hardwareStore).addTo(map).bindPopup('Hardware Store');

// School
var school = L.latLng([250, 500]);
L.marker(school).addTo(map).bindPopup('School');

// Library
var library = L.latLng([250, 750]);
L.marker(library).addTo(map).bindPopup('Library');

map.setView([500, 500], 1);