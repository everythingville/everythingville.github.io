/*** TOWN INFO ***/

// Explanations for features of all buildings
const buildings = [
    {
        name: "Music Store",
        file: "musicStore",
        description: `
            <p>If you're looking for something to listen to in the background, then this is the place for you. Visit the Music Store to access a variety of playlists with relaxing sounds and music from different genres. It's perfect for helping you concentrate while you work!</p>
            <b>Current collection of playlists:</b>
            <ul class="no-bullets">
                <li><img class="inline line-start" src="assets/img/relaxing.png" alt="Relaxing sounds" title="Relaxing sounds"> Relaxing sounds</li>
                <li><img class="inline line-start" src="assets/img/instrumental.png" alt="Instrumental music" title="Instrumental music"> Instrumental music</li>
                <li><img class="inline line-start" src="assets/img/pop.png" alt="Pop music" title="Pop music"> Pop music</li>
                <li><img class="inline line-start" src="assets/img/jazz.png" alt="Jazz music" title="Jazz music"> Jazz music</li>
                <li><img class="inline line-start" src="assets/img/rock.png" alt="Rock music" title="Rock music"> Rock music</li>
            </ul>
            <p>Not sure what to listen to? Check out the Surprise playlist for an interesting mix!</p>
        `
    },
    {
        name: "Gym",
        file: "gym",
        description: `
            <p class="center">Visit the Gym to check out workout guides designed to help you achieve your goals</p>
        `
    },
    {
        name: "Restaurant",
        file: "restaurant",
        description: `
            <p class="center">Visit the Restaurant to access recipes to suit a variety of occassions and diets</p>
        `
    },
    {
        name: "Home",
        file: "home",
        description: `
            <p class="center">Visit your Home to jot down your thoughts and save them for future reference</p>
        `
    },
    {
        name: "Town Hall",
        file: "townHall",
        description: `
            <p class="center">You're already here!</p>
        `
    },
    {
        name: "Post Office",
        file: "postOffice",
        description: `
            <p class="center">Visit the Post Office to write and print letters using templates for a variety of occasions</p>
        `
    },
    {
        name: "Hardware Store",
        file: "hardwareStore",
        description: `
            <p class="center">Visit the Hardware Store to check out tutorials to guide you through useful life hacks and crafts</p>
        `
    },
    {
        name: "School",
        file: "school",
        description: `
            <p class="center">Visit the School to study premade flashcards across a variety of common subjects</p>
        `
    },
    {
        name: "Library",
        file: "library",
        description: `
            <p class="center">Visit the Library to read free books from an extensive collection of popular genres</p>
        `
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
        <p class="center">When you find a building that you want to visit, simply click on the building file to open the popup with more details, and click <button class="inline" alt="Enter button (Not clickable)" title="Enter button (Not clickable)">Enter</button> to enter the building. If you ever want to return to the map from inside any of the buildings, you can always click <img class="inline" alt="Map file (Not clickable)" title="Map file (Not clickable)" src="assets/img/logo.png"> at the top right corner of your screen.</p>
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
        <p class="center">Learn about the most recent changes in the town!</p>
        <video controls>
            <source src="assets/devlogs/latest.mp4" type="video/mp4">
            The video tag is not supported by your browser.
        </video>
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

// Load all features for chosen building (automatically load first)
const loadBuilding = (index) => {
    const b = buildings[index];
    document.getElementById('building-info').innerHTML = `
        <div>${b.description}</div>
        <a href="${b.file}.html"><img src="assets/img/buildings/${b.file}.png" alt="${b.name}"></a>
    `;
}