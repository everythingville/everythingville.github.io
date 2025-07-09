/*** MAP ***/

// Grassy bkgd
var  bounds = [[0,0], [1000,1000]];
const map = L.map('map', {
    crs: L.CRS.Simple, // REMINDER: CRS.Simple coordinates are in [y,x] format (L.latLng is opposite order from typical coordinates)
    minZoom: 0,
    maxZoom: 2,
    maxBounds: bounds, // Prevents user from navigating outside grass
    maxBoundsViscosity: 1.0 // Re-enforces maxBounds
});
map.fitBounds(bounds);

// Information for each building marker
const buildings = {
    musicStore: {
        location: [750, 250],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/musicStore.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'Music Store',
        hook: 'Want something in the background?',
        description: 'Listen to music and relaxing sounds to help you concentrate',
        marker: null
    },
    gym: {
        location: [750, 500],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/gym.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'Gym',
        hook: 'Feel like exercising?',
        description: 'Check out workout guides designed to help you achieve your goals',
        marker: null
    },
    restaurant: {
        location: [750, 750],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/restaurant.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'Restaurant',
        hook: 'Want to cook or bake?',
        description: 'Access recipes to suit a variety of occasions and diets',
        marker: null
    },
    home: {
        location: [500, 250],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/home.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'Home',
        hook: 'Feel like writing?',
        description: 'Jot down your thoughts and save them for future reference',
        marker: null    
    },
    townHall: {
        location: [500, 500],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/townHall.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'Town Hall',
        hook: 'Welcome to Everythingville!',
        description: 'Learn more about how to navigate and move around town',
        marker: null
    },
    postOffice: {
        location: [500, 750],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/postOffice.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'Post Office',
        hook: 'Want to write to someone?',
        description: 'Write and print letters using templates for a variety of occasions',
        marker: null
    },
    hardwareStore: {
        location: [250, 250],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/hardwareStore.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'Hardware Store',
        hook: 'Feeling creative?',
        description: 'Check out tutorials to guide you through useful life hacks and crafts',
        marker: null
    },
    school: {
        location: [250, 500],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/school.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'School',
        hook: 'Want to test your knowledge?',
        description: 'Study premade flashcards across a variety of common subjects',
        marker: null
    },
    library: {
        location: [250, 750],
        icon: L.icon({
            iconUrl: 'assets/img/buildings/library.png',
            iconAnchor: [75, 150],
            popupAnchor: [0, -150],
            className: 'map-icon'
        }),
        title: 'Library',
        hook: 'Feel like reading?',
        description: 'Read free books from an extensive collection of popular genres',
        marker: null
    }
};

Object.keys(buildings).forEach(bName => {
    const b = buildings[bName];
    b.marker = L.marker(b.location, {icon: b.icon}).addTo(map);
    b.marker.bindPopup(`
        <div class="popup">
            <h3>${b.title}</h3>
            <i>${b.hook}</i>
            <p class="center">${b.description}</p>
            <a href="${bName}.html"><button>Enter</button></a>
        </div>
    `);
});

// Make building icons jump up when hovering over them
map.eachLayer(layer => {
    if (layer instanceof L.Marker) {
        layer.on('mouseover', () => {
            const icon = this.getElement();
            if (icon) {
                icon.style.transform = 'translateY(-10px) scale(1.1)';
                icon.style.zIndex = '1000';
            }
        });
        layer.on('mouseout', () => {
            const icon = this.getElement();
            if (icon) {
                icon.style.transform = '';
                icon.style.zIndex = '';
            }
        });
    }
});

buildings.townHall.marker.on('click', function(e) {
    buildings.townHall.marker.openPopup();
});
map.setView([575, 500], 1);
buildings.townHall.marker.fire('click');