/*** TOWN INFO ***/

// Explanations for features of all buildings
const buildings = [
    {
        name: "Music Store",
        file: "musicStore",
        description: `
            <p>If you're looking for something to listen to in the background, then this is the place for you. Visit the Music Store to access a variety of playlists with relaxing sounds and music from different genres. It's perfect for helping you concentrate while you work!</p>
            <b>Current collection of playlists:</b>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/relaxing.png" alt="Relaxing sounds" title="Relaxing sounds"><p> Relaxing sounds</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/instrumental.png" alt="Instrumental music" title="Instrumental music"><p> Instrumental music</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/pop.png" alt="Pop music" title="Pop music"><p> Pop music</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/jazz.png" alt="Jazz music" title="Jazz music"><p> Jazz music</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/rock.png" alt="Rock music" title="Rock music"><p> Rock music</p></div>
            </div>
            <p>Not sure what to listen to? Check out the <button class="inline yellow" alt="Surprise button (Not clickable)" title="Surprise button (Not clickable)">Surprise!</button> playlist for an interesting mix!</p>
        `
    },
    {
        name: "Gym",
        file: "gym",
        description: `
            <p>If you're looking for some exercises to do, then this is the place for you. Visit the Gym to access workout guides grouped by different categories. It's perfect for taking a break while working toward achieving your fitness goals!</p>
            <b>Current workout categories:</b>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/easy.png" alt="Easy exercises" title="Easy exercises"><p> Easy exercises</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/medium.png" alt="Medium exercises" title="Medium exercises"><p> Medium exercises</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/challenging.png" alt="Challenging exercises" title="Challenging"><p> Challenging exercises</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/yoga.png" alt="Yoga poses" title="Yoga poses"><p> Yoga poses</p></div>
            </div>
            <p>After selecting a category, you will see a dropdown with a list of exercises, and details about one of the exercises from the list will appear. You can change the selected exercise either by using the dropdown or by clicking again on the category button to view a randomized exercise.</p>
        `
    },
    {
        name: "Restaurant",
        file: "restaurant",
        description: `
            <p>If you're looking for something to cook or bake, then this is the place for you. Visit the Restaurant to access recipes grouped by different categories. It's perfect for taking a break when you get hungry!</p>
            <b>Current recipe categories:</b>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/breakfast.png" alt="Breakfast" title="Breakfast"><p> Breakfast</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/lunch.png" alt="Lunch" title="Lunch"><p> Lunch</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/dinner.png" alt="Dinner" title="Dinner"><p> Dinner</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/dessert.png" alt="Dessert" title="Dessert"><p> Dessert</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/drinks.png" alt="Drinks" title="Drinks"><p> Drinks</p></div>
            </div>
            <p>After selecting a category, you will see a dropdown with a list of recipes, and details about one of the recipes from the list will appear. You can change the selected recipe either by using the dropdown or by clicking again on the category button to view a randomized exercise.</p>
        `
    },
    {
        name: "Home",
        file: "home",
        description: `
            <p>If you're looking for somewhere to jot down your thoughts, then this is the place for you. Visit your Home to write in your personal digital journal. All of your saved journal entries are private to you and stored locally on your web browser.</p>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/save.png" alt="Save journal entry" title="Save journal entry"><p> Save your journal entries for future reference</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/export.png" alt="Export all journals" title="Export all journals"><p> Export all of your saved entries as a text file</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/delete-red.png" alt="Delete journal entry" title="Delete journal entry"><p> Delete any of your saved entries from local storage</p></div>
            </div>
        `
    },
    {
        name: "Town Hall",
        file: "townHall",
        description: `
            <p>You're already here! If it's your first time in Everythingville, then this is the best place to start. If you're a returning guest, you're more than welcome to stay here for refreshers on navigating the town and all the different buildings in Everythingville. You can also take a look at the latest updates and access the feedback form.</p>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/logo.png" alt="How to navigate" title="How to navigate"><p> Learn about how to use the map to enter any of the buildings</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/features.png" alt="All features" title="All features"><p> Explore all the different features available in each of the buildings</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/updates.png" alt="Latest updates" title="Latest updates"><p> Stay up-to-date on the latest changes in Everythingville</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/feedback.png" alt="Feedback form" title="Feedback form"><p> Help improve the town by providing some feedback</p></div>
            </div>
        `
    },
    {
        name: "Post Office",
        file: "postOffice",
        description: `
            <p>If you're looking for help with writing letters, then this is the place for you. Visit the Post Office to access guides on writing letters for several different occasions. Each guide contains the general structure for writing the specified type of letter and an example letter that you can copy and use as a template.</p>
            <b>Current letter types with guides:</b>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/academic.png" alt="Academic letters" title="Academic letters"><p> Academic letters</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/business.png" alt="Business letters" title="Business letters"><p> Business letters</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/casual.png" alt="Casual letters" title="Casual letters"><p> Casual letters</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/thanks.png" alt="Thank you letters" title="Thank you letters"><p> Thank you letters</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/complaint.png" alt="Complaint letters" title="Complaint letters"><p> Complaint letters</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/invite.png" alt="Invitations" title="Invitations"><p> Invitations</p></div>
            </div>
            <p>Ready to write your own letter? The <button class="inline yellow" alt="Letter builder button (Not clickable)" title="Letter builder button (Not clickable)">Letter Builder</button> will help facilitate the process. Once you open the builder, you will see a dropdown with a list of the available types of letters. After you select the letter type, a form will appear for you to fill out the information you want on the letter.</p>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/generate.png" alt="Generate letter" title="Generate letter"><p> Generate your letter from your form responses</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/print.png" alt="Print letter" title="Print letter"><p> Print your letter once you're done editing it</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/reset.png" alt="New letter" title="New letter"><p> Write a new letter or clear the form to start over</p></div>
            </div>
        `
    },
    {
        name: "Hardware Store",
        file: "hardwareStore",
        description: `
            <p>If you're looking for something to create, then this is the place for you. Visit the Hardware Store to access step-by-step DIY tutorials grouped by different categories. It's perfect for taking a break while making something useful!</p>
            <b>Current tutorial categories:</b>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/lifeHacks.png" alt="Life hacks" title="Life hacks"><p> Life hacks</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/crafts.png" alt="Crafts" title="Crafts"><p> Crafts</p></div>
            </div>
            <p>After selecting a category, you will see a dropdown with a list of tutorials, and details about one of the tutorials from the list will appear. You can change the selected tutorial either by using the dropdown or by clicking again on the category button to view a randomized tutorial.</p>
        `
    },
    {
        name: "School",
        file: "school",
        description: `
            <p>If you're looking for somewhere to study, then this is the place for you. Visit the School to access premade flashcards grouped by subjects. It's perfect for testing your knowledge!</p>
            <b>Current flashcard subjects:</b>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/math.png" alt="Mathematics" title="Mathematics"><p> Mathematics</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/ela.png" alt="Language arts" title="Language arts"><p> Language arts</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/sci.png" alt="Science" title="Science"><p> Science</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/ss.png" alt="Social studies" title="Social studies"><p> Social studies</p></div>
            </div>
            <p>After selecting a subject, you will see a dropdown with a list of difficulty levels. Once you choose a level of difficulty, flashcards for the subject you selected will appear.</p>
        `
    },
    {
        name: "Library",
        file: "library",
        description: `
            <p>If you're looking for something to read, then this is the place for you. Visit the Library to access an extensive collection of books grouped by different genres. It's perfect for taking a break!</p>
            <b>Current collection of genres:</b>
            <div class="custom-list">
                <div class="li"><img class="inline line-start" src="assets/img/sciFi.png" alt="Sci-fi books" title="Sci-fi books"><p> Sci-fi books</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/fantasy.png" alt="Fantasy books" title="Fantasy books"><p> Fantasy books</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/mystery.png" alt="Mystery books" title="Mystery books"><p> Mystery books</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/humor.png" alt="Humorous books" title="Humorous books"><p> Humorous books</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/plays.png" alt="Plays" title="Plays"><p> Plays</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/society.png" alt="Society books" title="Society books"><p> Society books</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/travel.png" alt="Travel books" title="Travel books"><p> Travel books</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/children.png" alt="Children's books" title="Children's books"><p> Children's books</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/poetry.png" alt="Poetry books" title="Poetry books"><p> Poetry books</p></div>
                <div class="li"><img class="inline line-start" src="assets/img/biographies.png" alt="Biographies" title="Biographies"><p> Biographies</p></div>
            </div>
            <p>After selecting a genre, you will see a dropdown with a list of books, and one of the books from the list will appear. You can change the selected book either by using the dropdown or by clicking again on the genre button to view a randomized book.</p>
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
        <p class="center">When you find a building that you want to visit, simply click on the building file to open the popup with more details, and click <button class="inline" alt="Enter button (Not clickable)" title="Enter button (Not clickable)">Enter</button> to enter the building. If you ever want to return to the map from inside any of the buildings, you can always click <img class="inline" alt="Map icon (Not clickable)" title="Map icon (Not clickable)" src="assets/img/logo.png"> at the top right corner of your screen.</p>
    `,
    features: `
        <label>Building:</label>
        <select id="building">
            <option value="" selected disabled>Select a building</option>
            ${buildings.map(b => `
                <option value="${buildings.indexOf(b)}">${b.name}</option>
            `).join('')}
        </select>
        <div id="building-info"></div>
    `,
    updates: `
        <p class="center">Learn about the most recent changes happening in town!</p>
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
            document.getElementById('building').addEventListener('change', (e) => {
                loadBuilding(e.target.value);
            });
    };
};

// Load all features for chosen building
const loadBuilding = (index) => {
    const b = buildings[index];
    document.getElementById('building-info').innerHTML = `
        <div>${b.description}</div>
        <a href="${b.file}.html"><img src="assets/img/buildings/${b.file}.png" alt="${b.name}" title="Visit the ${b.name}"></a>
    `;
}