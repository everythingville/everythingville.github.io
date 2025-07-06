/*** MAP ***/

// Grass
var  bounds = [[0,0], [1000,1000]];
const map = L.map('map', {
    crs: L.CRS.Simple, // REMINDER: CRS.Simple coordinates are in [y,x] format (L.latLng is opposite order from typical coordinates)
    minZoom: 0,
    maxBounds: bounds, // Prevents user from navigating outside grass
    maxBoundsViscosity: 1.0 // Re-enforces maxBounds
});
map.fitBounds(bounds);

// Buildings
const icons = {
    musicStore: L.icon({
        iconUrl: 'assets/img/buildings/musicStore.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
    }),
    gym: L.icon({
        iconUrl: 'assets/img/buildings/gym.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
    }),
    restaurant: L.icon({
        iconUrl: 'assets/img/buildings/restaurant.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
    }),
    home: L.icon({
        iconUrl: 'assets/img/buildings/home.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
    }),
    townHall: L.icon({
        iconUrl: 'assets/img/buildings/townHall.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
    }),
    postOffice: L.icon({
        iconUrl: 'assets/img/buildings/postOffice.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
    }),
    hardwareStore: L.icon({
        iconUrl: 'assets/img/buildings/hardwareStore.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
    }),
    school: L.icon({
        iconUrl: 'assets/img/buildings/school.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
    }),
    library: L.icon({
        iconUrl: 'assets/img/buildings/library.png',
        iconSize: [150, 150],
        iconAnchor: [75, 75],
        popupAnchor: [0, -75]
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

L.marker(locations.musicStore, {icon: icons.musicStore}).addTo(map).bindPopup('<div class="popup"><h3>Music Store</h3><p class="center"><i>Want something in the background?</i><br><br>Listen to music and relaxing sounds to help you concentrate and have fun</p><a href="musicStore.html"><button>Enter</button></a></div>');
L.marker(locations.gym, {icon: icons.gym}).addTo(map).bindPopup('<div class="popup"><h3>Gym</h3><p class="center"><i>Feel like exercising?</i><br><br>Check out workout guides designed to help you achieve your fitness goals</p><a href="gym.html"><button>Enter</button></a></div>');
L.marker(locations.restaurant, {icon: icons.restaurant}).addTo(map).bindPopup('<div class="popup"><h3>Restaurant</h3><p class="center"><i>Want to cook or bake?</i><br><br>Access recipes to suit a variety of occasions and diets</p><a href="restaurant.html"><button>Enter</button></a></div>');
L.marker(locations.home, {icon: icons.home}).addTo(map).bindPopup('<div class="popup"><h3>Home</h3><p class="center"><i>Feel like writing?</i><br><br>Jot down your thoughts and save them for future reference in your digital journal</p><a href="home.html"><button>Enter</button></a></div>');
townHall = L.marker(locations.townHall, {icon: icons.townHall}).addTo(map);
townHall.bindPopup('<div class="popup"><h3>Town Hall</h3><p class="center"><i>Welcome to Everythingville!</i><br><br>Learn more about how to move around town and navigate between buildings</p><a href="townHall.html"><button>Enter</button></a></div>');
townHall.on('click', function(e) {
    townHall.openPopup();
});
L.marker(locations.postOffice, {icon: icons.postOffice}).addTo(map).bindPopup('<div class="popup"><h3>Post Office</h3><p class="center"><i>Want to write to someone?</i><br><br>Write and print letters using templates designed for a variety of occasions</p><a href="postOffice.html"><button>Enter</button></a></div>');
L.marker(locations.hardwareStore, {icon: icons.hardwareStore}).addTo(map).bindPopup('<div class="popup"><h3>Hardware Store</h3><p class="center"><i>Feeling creative?</i><br><br>Check out DIY tutorials to guide you through useful life hacks and crafts</p><a href="hardwareStore.html"><button>Enter</button></a></div>');
L.marker(locations.school, {icon: icons.school}).addTo(map).bindPopup('<div class="popup"><h3>School</h3><p class="center"><i>Want to see what you know?</i><br><br>Study premade flashcards across a variety of common subjects</p><a href="school.html"><button>Enter</button></a></div>');
L.marker(locations.library, {icon: icons.library}).addTo(map).bindPopup('<div class="popup"><h3>Library</h3><p class="center"><i>Feel like reading?</i><br><br>Read free books from an extensive collection of popular genres</p><a href="library.html"><button>Enter</button></a></div>');

map.setView([575, 500], 1);
townHall.fire('click');