/*** TOWN INFO ***/

// Explanations for features of all buildings
const buildings = [
    {
        name: "Music Store",
        icon: "musicStore",
        description: `<p class="center">about the music store</p>`
    },
    {
        name: "Gym",
        icon: "gym",
        description: `<p class="center">about the gym</p>`
    },
    {
        name: "Restaurant",
        icon: "restaurant",
        description: `<p class="center">about the restaurant</p>`
    },
    {
        name: "Home",
        icon: "home",
        description: `<p class="center">about home</p>`
    },
    {
        name: "Town Hall",
        icon: "townHall",
        description: `<p class="center">about the town hall</p>`
    },
    {
        name: "Post Office",
        icon: "postOffice",
        description: `<p class="center">about the post office</p>`
    },
    {
        name: "Hardware Store",
        icon: "hardwareStore",
        description: `<p class="center">about the hardware store</p>`
    },
    {
        name: "School",
        icon: "school",
        description: `<p class="center">about the school</p>`
    },
    {
        name: "Library",
        icon: "library",
        description: `<p class="center">about the library</p>`
    }
];

// Content for town info sections
const allInfo = {
    navigation: `
        <p class="center">Think of Everythingville like a small town, with the <a href="index.html">main page</a> containing a map of the town.</p>
        <b>If you're on a computer:</b>
        <ul>
            <li>Click on any green area of your screen and drag your mouse to move around</li>
            <li>Use the plus (+) and minus (-) signs located at the top left of your screen to zoom in and out, respectively</li>
        </ul>
        <b>If you're on a mobile device:</b>
        <ul>
            <li>Tap and hold any green area of your screen to move around by dragging one finger</li>
            <li>Using two fingers, slide your fingers away from or toward each other to zoom in and out, respectively</li>
        </ul>
        <p class="center">When you find a building that you want to visit, simply click on the building icon to open the popup with more details, and click <button class="inline" alt="Enter button (Not clickable)" title="Enter button (Not clickable)">Enter</button> to enter the building. If you ever want to return to the map from inside any of the buildings, you can always click <img class="inline" alt="Map icon (Not clickable)" title="Map icon (Not clickable)" src="assets/img/logo.png"> at the top right corner of your screen.</p>
    `,
    features: `
        <label>Building:</label>
        <select id="building">
            ${buildings.map(b => `
                <option value="${buildings.indexOf(b)}">${b.name}</option>
            `).join('')}
        </select>
        <div id="building-info"></div>
    `,
    updates: `
    `,
    feedback: `
        <p class="center">Have any suggestions for improving Everythingville? Fill out the form below!</p>
        <iframe class="feedback" src="https://docs.google.com/forms/d/e/1FAIpQLScpLv0zl4vnY8xCj_a4G1o2wAlr3ltc829QCXXeXTyQ79k3JQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0"></iframe>
    `
};

document.querySelectorAll('div.info-btns button').forEach(button => {
    button.addEventListener('click', () => {
        const info = button.dataset.info;
        const title = button.textContent;
        loadInfo(info, title);
    });
});

// Load chosen town info section
const loadInfo = (info, title) => {
    const section = allInfo[info];
    document.getElementById('info-display').innerHTML = `
        <h3>${title}</h3>
        ${section}
    `;
    switch(info) {
        case 'features':
            document.getElementById('building').selectedIndex = 0;
            loadBuilding(0);
            document.getElementById('building').addEventListener('change', (e) => {
                loadBuilding(e.target.value);
            });
    };
};

const loadBuilding = (index) => {
    const b = buildings[index];
    document.getElementById('building-info').innerHTML = `
        <div>${b.description}</div>
        <img src="assets/img/buildings/${b.icon}.png" alt="${b.name}">
    `;
}