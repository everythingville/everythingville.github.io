/*** DIY TUTORIALS ***/

// Tutorial DB
const allTutorials = {
    lifeHacks: {
        title: "Life Hacks",
        tutorials: [
            {
                name: "Unclog a Drain Without Chemicals",
                difficulty: "Easy",
                time: "10 min",
                cost: "$0-$2 (uses household items)",
                materials: ["1/2 cup baking soda", "1/2 cup white vinegar", "1 gallon hot water"],
                instructions: ["Pour baking soda directly into the drain", "Add vinegar slowly (it will bubble violently), and wait 5 min", "Flush with hot water (not boiling to avoid pipe damage)"],
                safetyTips: ["Wear gloves to protect hands from vinegar", "Ensure room is ventilated (vinegar fumes can be strong)"],
                troubleshooting: ["Still clogged? Try a plunger or coat hanger hook to remove hair", "Slow drain? Repeat weekly for maintenance"]
            },
            {
                name: "Fix a Wobbly Chair",
                difficulty: "Medium",
                time: "30 min + overnight drying",
                cost: "$5-$10 (wood glue + shims)",
                materials: ["Wood glue", "Cardboard/cereal box for shims", "Clamps (optional)"],
                instructions: ["Turn chair upside down, and identify loose joints", "Apply glue into gaps using nozzle or toothpick", "Insert shims (fold cardboard into thin strips) for tight fit", "Wipe excess glue, and clamp or weight down for 24 hr"],
                safetyTips: ["Work on a flat surface to avoid spills", "Wear old clothes (wood glue stains permanently)"],
                troubleshooting: ["Glue won't hold? Sand joints lightly for better adhesion", "Still wobbly? Reinforce with small nails or screws"]
            },
            {
                name: "Remove Stripped Screws",
                difficulty: "Easy",
                time: "5 min",
                cost: "$0 (rubber band) or $5 (screw extractor)",
                materials: ["Wide rubber band", "Screwdriver (correct size)"],
                instructions: ["Place rubber band over stripped screw head", "Press screwdriver firmly, and turn slowly counterclockwise", "If stuck, tap screwdriver gently with a hammer for grip"],
                safetyTips: ["Wear safety glasses if hammer is used", "Keep fingers clear of slipping tools"],
                troubleshooting: ["Still stuck? Use pliers to grip screw edges", "Head broken off? Drill tiny hole and use a screw extractor"]
            }
        ]
    },
    crafts: {
        title: "Crafts",
        tutorials: [
            {
                name: "Pallet Wood Photo Frame",
                difficulty: "Medium",
                time: "1-2 hr",
                cost: "$0-$10 (pallet wood is often free)",
                materials: ["Pallet wood scraps", "Sandpaper (120 grit)", "Wood glue", "Nails", "Ruler", "Saw (hand saw works)"],
                instructions: ["Sand wood until smooth (watch for splinters)", "Cut 4 pieces: 2 vertical (10 in long), 2 horizontal (8 in long)", "Glue corners, and clamp for 30 min", "Add nails for strength (pre-drill holes to avoid splitting)"],
                safetyTips: ["Wear gloves when handling pallet wood (nails/splinters)", "Saw on a stable surface away from body"],
                troubleshooting: ["Wood splits? Use thinner nails next time", "Uneven corners? Sand edges flush after glue dries"]
            },
            {
                name: "Mason Jar Organizer",
                difficulty: "Easy",
                time: "20 min",
                cost: "$15 (jars + board)",
                materials: ["3-5 mason jars with lids", "Wooden board (1 in x 6 in cut to length)", "Screws", "Drill"],
                instructions: ["Screw lids to board (space evenly)", "Twist jars into mounted lids", "Hang board on wall with heavy-duty hooks"],
                safetyTips: ["Drill pilot holes to prevent wood cracks", "Check wall studs for heavy items"],
                troubleshooting: ["Jars wobble? Add rubber gaskets under lids", "Board sags? Use thicker wood or add center support"]
            },
            {
                name: "No-Sew Rope Basket",
                difficulty: "Medium",
                time: "1 hr",
                cost: "$10 (rope + glue)",
                materials: ["50 ft cotton rope (1/4 in thick)", "Hot glue gun", "Glue sticks", "Scissors"],
                instructions: ["Coil rope tightly, gluing every 2-3 loops", "Build sides by angling coils towards", "Tuck end under last coil, glue securely"],
                safetyTips: ["Use low-temp glue gun to avoid burns", "Work on parchment paper (glue won't stick)"],
                troubleshooting: ["Rope unravels? Apply more glue between layers", "Basket leans? Adjust coil tension as you build"]
            }
        ]
    }
};
document.querySelectorAll('div.diy-btns button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        displayTutorial(category);
    });
});

// Display tutorials from chosen category
const displayTutorial = (category) => {
    const tutorials = allTutorials[category];
    document.getElementById('tutorial-display').innerHTML = `
        <h3>${tutorials.title}</h3>
        <label>Tutorial:</label>
        <select id="tutorial">
            ${tutorials.tutorials.map(t => `
                <option value=${tutorials.tutorials.indexOf(t)}>${t.name}</option>`
            ).join('')}
        </select>
        <div id="tutorial-info"></div>
    `;

    const randIndex = Math.floor(Math.random() * tutorials.tutorials.length);
    document.getElementById('tutorial').selectedIndex = randIndex;
    loadTutorial(tutorials, randIndex);
    document.getElementById('tutorial').addEventListener('change', (e) => {
        loadTutorial(tutorials, e.target.value);
    });
};

// Display chosen tutorial (automatically loads random)
const loadTutorial = (tutorials, index) => {
    const t = tutorials.tutorials[index];
    document.getElementById('tutorial-info').innerHTML = `
        <p><b>Difficulty:</b> ${t.difficulty}</p>
        <p><b>Time:</b> ${t.time}</p>
        <p><b>Cost:</b> ${t.cost}</p>
        <b>Materials:</b>
        <ul>${t.materials.map(m => `<li>${m}</li>`).join('')}</ul>
        <b>Instructions:</b>
        <ul>${t.instructions.map(i => `<li>${i}</li>`).join('')}</ul>
        <b>Safety Tips:</b>
        <ul>${t.safetyTips.map(st => `<li>${st}</li>`).join('')}</ul>
        <b>Troubleshooting:</b>
        <ul>${t.troubleshooting.map(t => `<li>
            <b>${t.includes("?") ? t.slice(0, t.indexOf("?") + 1) : ""}</b>
            ${t.includes("?") ? t.slice(t.indexOf("?") + 1, t.length) : t}
        </li>`).join('')}</ul>
    `;
};