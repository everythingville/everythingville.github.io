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

L.marker(locations.musicStore, {icon: icons.musicStore}).addTo(map).bindPopup('<div class="popup"><h3>Music Store</h3><a href="musicStore.html"><button>Enter</button></a></div>');
L.marker(locations.gym, {icon: icons.gym}).addTo(map).bindPopup('<div class="popup"><h3>Gym</h3><a href="gym.html"><button>Enter</button></a></div>');
L.marker(locations.restaurant, {icon: icons.restaurant}).addTo(map).bindPopup('<div class="popup"><h3>Restaurant</h3><a href="restaurant.html"><button>Enter</button></a></div>');
L.marker(locations.home, {icon: icons.home}).addTo(map).bindPopup('<div class="popup"><h3>Home</h3><a href="home.html"><button>Enter</button></a></div>');
L.marker(locations.townHall, {icon: icons.townHall}).addTo(map).bindPopup('<div class="popup"><h3>Town Hall</h3><a href="townHall.html"><button>Enter</button></a></div>');
L.marker(locations.postOffice, {icon: icons.postOffice}).addTo(map).bindPopup('<div class="popup"><h3>Post Office</h3><a href="postOffice.html"><button>Enter</button></a></div>');
L.marker(locations.hardwareStore, {icon: icons.hardwareStore}).addTo(map).bindPopup('<div class="popup"><h3>Hardware Store</h3><a href="hardwareStore.html"><button>Enter</button></a></div>');
L.marker(locations.school, {icon: icons.school}).addTo(map).bindPopup('<div class="popup"><h3>School</h3><a href="school.html"><button>Enter</button></a></div>');
L.marker(locations.library, {icon: icons.library}).addTo(map).bindPopup('<div class="popup"><h3>Library</h3><a href="library.html"><button>Enter</button></a></div>');

map.setView([500, 500], 1);

/*** LETTER GUIDES ***/

const letterTemplates = {
    formal: {
        title: "Formal Letter (Job Application)",
        structure: `
            <div>
                <h3>Structure</h3>
                <ol>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's address</li>
                    <li><b>Subject line</b></li>
                    <li>Greeting (ex. Dear Mr./Ms. LastName)</li>
                    <li>Body (3-4 paragraphs)</li>
                    <li>Closing (ex. Sincerely)</li>
                    <li>Your name</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h3>Example</h3>
                <textarea readonly>
                    123 Main St
                    Anytown, USA
                    January 1, 2025

                    Hiring Manager
                    ABC Company
                    456 Business Ave

                    Subject: Application for Programming Position

                    Dear Ms. Doe,

                    I am writing to apply... [continues explaining for 3-4 paragraphs]
                </textarea>
            </div>
        `
    }
};

document.querySelectorAll('button.letter-guides').forEach(button => {
    button.addEventListener('click', () => {
        console.log("click");
        const type = button.dataset.type;
        const letterTemplate = letterTemplates[type];

        document.getElementById('letter-display').innerHTML = `
            <h3>${template.title}</h3>
            ${template.structure}
            ${template.example}
            <button class="copy-btn">Copy Example</button>
        `;
    });
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const textarea = e.target.closest('div').querySelector('textarea');
        textarea.select()
        document.execCommand('copy');
        alert('Copied to clipboard');
    }
})