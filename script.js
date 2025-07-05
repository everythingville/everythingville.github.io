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

L.marker(locations.musicStore, {icon: icons.musicStore}).addTo(map).bindPopup('<h3>Music Store</h3><a href="template.html?building=musicStore"><button>Enter</button></a>');
L.marker(locations.gym, {icon: icons.gym}).addTo(map).bindPopup('<h3>Gym</h3><a href="template.html?building=gym"><button>Enter</button></a>');
L.marker(locations.restaurant, {icon: icons.restaurant}).addTo(map).bindPopup('<h3>Restaurant</h3><a href="template.html?building=restaurant"><button>Enter</button></a>');
L.marker(locations.home, {icon: icons.home}).addTo(map).bindPopup('<h3>Home</h3><a href="template.html?building=home"><button>Enter</button></a>');
L.marker(locations.townHall, {icon: icons.townHall}).addTo(map).bindPopup('<h3>Town Hall</h3><a href="template.html?building=townHall"><button>Enter</button></a>');
L.marker(locations.postOffice, {icon: icons.postOffice}).addTo(map).bindPopup('<h3>Post Office</h3><a href="template.html?building=postOffice"><button>Enter</button></a>');
L.marker(locations.hardwareStore, {icon: icons.hardwareStore}).addTo(map).bindPopup('<h3>Hardware Store</h3><a href="template.html?building=hardwareStore"><button>Enter</button></a>');
L.marker(locations.school, {icon: icons.school}).addTo(map).bindPopup('<h3>School</h3><a href="template.html?building=school"><button>Enter</button></a>');
L.marker(locations.library, {icon: icons.library}).addTo(map).bindPopup('<h3>Library</h3><a href="template.html?building=library"><button>Enter</button></a>');

map.setView([500, 500], 0);


/*** CONTENT ***/
let building = 'townHall';

if (!window.location.pathname.includes('index.html')) {
    const params = new URLSearchParams(window.location.search);
    building = params.get('building') || 'townHall';
    console.log(building);
}

const buildingContent = {
    musicStore: {
        title: "Music Store",
        background: "url('assets/img/bkgds/musicStore.png')",
        content: `<p>Listen to music, choose specific genre, randomized, relaxing sounds</p>`
    },
    gym: {
        title: "Gym",
        background: "url('assets/img/bkgds/gym.png')",
        content: `<p>Workout guides (like Darebee), yoga/meditation routines, fitness trackers., choose specific goal/target area or randomized workout sessions</p>`
    },
    restaurant: {
        title: "Restaurant",
        background: "url('assets/img/bkgds/restaurant.png')",
        content: `<p>Recipe database (like AllRecipes), meal planners, dietary filters, choose specific type or randomized</p>`
    },
    home: {
        title: "Home",
        background: "url('assets/img/bkgds/home.png')",
        content: `<p>Journal, prompts, draw, prompts, to-do list</p>`
    },
    townHall: {
        title: "Town Hall",
        background: "url('assets/img/bkgds/townHall.png')",
        content: `<p>About site, how to navigate, all features, latest updates, date, clock, users suggest new buildings</p>`
    },
    postOffice: {
        title: "Post Office",
        background: "url('assets/img/bkgds/postOffice.png')",
        content: `<p>Mail templates, resume builders, letter-writing guides</p>`
    },
    hardwareStore: {
        title: "Hardware Store",
        background: "url('assets/img/bkgds/hardwareStore.png')",
        content: `<p>DIY guides, tool tutorials, home repair checklists</p>`
    },
    school: {
        title: "School",
        background: "url('assets/img/bkgds/school.png')",
        content: `<p>Free courses (like Khan Academy), skill-building tutorials, articles and slides, learn about specific subject, randomized, quizzes, flashcards, premade, customizable</p>`
    },
    library: {
        title: "Library",
        background: "url('assets/img/bkgds/library.png')",
        content: `<p>Free books, short stories, poetry, audiobooks (like Project Gutenberg), choose specific type or randomized (mad lips)</p>`
    }
};

if (buildingContent[building]) {
    document.title = `${buildingContent[building].title} | Everythingville`;
    document.querySelector('h1').textContent = `Welcome to ${buildingContent[building].title}`
    document.querySelector('main').innerHTML = buildingContent[building].content;
    document.body.style.backgroundImage = buildingContent[building].background;
}