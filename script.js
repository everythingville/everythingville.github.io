// Grass
var  bounds = [[0,0], [1000,1000]];
const map = L.map('map', {
    crs: L.CRS.Simple, // REMINDER: CRS.Simple coordinates are in [y,x] format (L.latLng is opposite order from typical coordinates)
    minZoom: -1,
    maxBounds: bounds, // Prevents user from navigating outside grass
    maxBoundsViscosity: 1.0 // Re-enforces maxBounds
});
//var image = L.imageOverlay('assets/img/grassBkgd.png', bounds).addTo(map);
map.fitBounds(bounds);

// Buildings
const icons = {
    musicStore: L.icon({
        iconUrl: 'assets/img/musicStore.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    gym: L.icon({
        iconUrl: 'assets/img/gym.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    restaurant: L.icon({
        iconUrl: 'assets/img/restaurant.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    home: L.icon({
        iconUrl: 'assets/img/home.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    townHall: L.icon({
        iconUrl: 'assets/img/townHall.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    postOffice: L.icon({
        iconUrl: 'assets/img/postOffice.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    hardwareStore: L.icon({
        iconUrl: 'assets/img/hardwareStore.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    school: L.icon({
        iconUrl: 'assets/img/school.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    library: L.icon({
        iconUrl: 'assets/img/library.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    })
};

const locations = {
    musicStore: [750, 250],
    gym: [750, 500],
    restaurant: [750, 750],
    home: [500, 250],
    townHall: [500, 500],
    postOffice: [500, 750],
    hardwareStore: [250, 250],
    school: [250, 500],
    library: [250, 750]
};

L.marker(locations.musicStore, {icon: icons.musicStore}).addTo(map).bindPopup('Music Store');
L.marker(locations.gym, {icon: icons.gym}).addTo(map).bindPopup('Gym');
L.marker(locations.restaurant, {icon: icons.restaurant}).addTo(map).bindPopup('Restaurant');
L.marker(locations.home, {icon: icons.home}).addTo(map).bindPopup('Home');
L.marker(locations.townHall, {icon: icons.townHall}).addTo(map).bindPopup('Town Hall');
L.marker(locations.postOffice, {icon: icons.postOffice}).addTo(map).bindPopup('Post Office');
L.marker(locations.hardwareStore, {icon: icons.hardwareStore}).addTo(map).bindPopup('Hardware Store');
L.marker(locations.school, {icon: icons.school}).addTo(map).bindPopup('School');
L.marker(locations.library, {icon: icons.library}).addTo(map).bindPopup('Library');

map.setView([500, 500], 0);