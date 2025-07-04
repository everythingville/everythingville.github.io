// Grass
const map = L.map('map', {
    crs: L.CRS.Simple // REMINDER: CRS.Simple coordinates are in [y,x] format (L.latLng is opposite order from typical coordinates)
});
var  bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('assets/img/grass-bkgd.png', bounds).addTo(map);
map.fitBounds(bounds);

// Music store
var musicStore = L.latLng([750, 250]);
L.marker(musicStore).addTo(map)

// Gym
var gym = L.latLng([750, 500]);
L.marker(gym).addTo(map)

// Restaurant
var restaurant = L.latLng([750, 750]);
L.marker(restaurant).addTo(map)

// Home
var home = L.latLng([500, 250]);
L.marker(home).addTo(map)

// Town hall
var townHall = L.latLng([500, 500]);
L.marker(townHall).addTo(map)

// Post office
var postOffice = L.latLng([500, 750]);
L.marker(postOffice).addTo(map)

// Hardware store
var hardwareStore = L.latLng([250, 250]);
L.marker(hardwareStore).addTo(map)

// School
var school = L.latLng([250, 500]);
L.marker(school).addTo(map)

// Library
var library = L.latLng([250, 750]);
L.marker(library).addTo(map)

map.setView([500, 500], 1);