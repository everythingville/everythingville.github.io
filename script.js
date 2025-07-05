/*** MAP ***/

// Grass
var  bounds = [[0,0], [1000,1000]];
const map = L.map('map', {
    crs: L.CRS.Simple, // REMINDER: CRS.Simple coordinates are in [y,x] format (L.latLng is opposite order from typical coordinates)
    minZoom: -1,
    maxBounds: bounds, // Prevents user from navigating outside grass
    maxBoundsViscosity: 1.0 // Re-enforces maxBounds
});
map.fitBounds(bounds);

// Buildings
const icons = {
    musicStore: L.icon({
        iconUrl: 'assets/img/buildings/musicStore.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    gym: L.icon({
        iconUrl: 'assets/img/buildings/gym.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    restaurant: L.icon({
        iconUrl: 'assets/img/buildings/restaurant.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    home: L.icon({
        iconUrl: 'assets/img/buildings/home.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    townHall: L.icon({
        iconUrl: 'assets/img/buildings/townHall.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    postOffice: L.icon({
        iconUrl: 'assets/img/buildings/postOffice.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    hardwareStore: L.icon({
        iconUrl: 'assets/img/buildings/hardwareStore.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    school: L.icon({
        iconUrl: 'assets/img/buildings/school.png',
        iconSize: [100, 100],
        iconAnchor: [50, 50],
        popupAnchor: [0, -50]
    }),
    library: L.icon({
        iconUrl: 'assets/img/buildings/library.png',
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

L.marker(locations.musicStore, {icon: icons.musicStore}).addTo(map).bindPopup('<div class="popup"><h3>Music Store</h3><a href="musicStore.html"><button>Enter</button></a></div>');
L.marker(locations.gym, {icon: icons.gym}).addTo(map).bindPopup('<div class="popup"><h3>Gym</h3><a href="gym.html"><button>Enter</button></a></div>');
L.marker(locations.restaurant, {icon: icons.restaurant}).addTo(map).bindPopup('<div class="popup"><h3>Restaurant</h3><a href="restaurant.html"><button>Enter</button></a></div>');
L.marker(locations.home, {icon: icons.home}).addTo(map).bindPopup('<div class="popup"><h3>Home</h3><a href="home.html"><button>Enter</button></a></div>');
L.marker(locations.townHall, {icon: icons.townHall}).addTo(map).bindPopup('<div class="popup"><h3>Town Hall</h3><a href="townHall.html"><button>Enter</button></a></div>');
L.marker(locations.postOffice, {icon: icons.postOffice}).addTo(map).bindPopup('<div class="popup"><h3>Post Office</h3><a href="postOffice.html"><button>Enter</button></a></div>');
L.marker(locations.hardwareStore, {icon: icons.hardwareStore}).addTo(map).bindPopup('<div class="popup"><h3>Hardware Store</h3><a href="hardwareStore.html"><button>Enter</button></a></div>');
L.marker(locations.school, {icon: icons.school}).addTo(map).bindPopup('<div class="popup"><h3>School</h3><a href="school.html"><button>Enter</button></a></div>');
L.marker(locations.library, {icon: icons.library}).addTo(map).bindPopup('<div class="popup"><h3>Library</h3><a href="library.html"><button>Enter</button></a></div>');

map.setView([500, 500], 0);

/*** LETTER GUIDES ***/

