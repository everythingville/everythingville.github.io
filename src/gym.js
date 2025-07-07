/*** WORKOUT GUIDES ***/

// Workout db
const workouts = {
    easy: {
        title: "Foundational Strength Routine",
        description: "Full-body workout to build basic strength and movement patterns. Perform 2-3x/week with at least 1 rest day between sessions.",
        exercises: [
            {
                name: "Bodyweight Squats",
                sets: "3 x 10",
                rest: "60 sec",
                notes: "Keep knees aligned with toes",
                props: "None",
                focusAreas: ["Quads", "Glutes", "Core"],
                contraindications: "Knee pain (modify depth)",
                instructions: "Stand feet shoulder-width apart, lower hips back and down like sitting in a chair, keep chest up, press through heels to stand"
            },
            {
                name: "Incline Push Ups",
                sets: "3 x 8",
                rest: "60 sec",
                notes: "Hands on bench/table",
                props: "Bench/stable elevated surface",
                focusAreas: ["Chest", "Shoulders", "Triceps"],
                contraindications: "Shoulder injury",
                instructions: "Place hands on surface wider than shoulders, keep body straight from head to heels, lower chest to surface, push back up"
            },
            {
                name: "Assisted Pull Ups",
                sets: "3 x 6",
                rest: "90 sec",
                notes: "Use band or assisted machine",
                props: "Resistance band/pull-up assist machine",
                focusAreas: ["Back", "Biceps"],
                contraindications: "Shoulder instability",
                instructions: "Grip bar wider than shoulders, engage back muscles, pull chest toward bar, control descent"
            },
            {
                name: "Dumbbell Romanian Deadlifts",
                sets: "3 x 10",
                rest: "60 sec",
                notes: "Soft knees, hinge at hips",
                props: "Dumbbells",
                focusAreas: ["Hamstrings", "Glutes", "Lower back"],
                contraindications: "Disc issues (use lighter weights",
                instructions: "Hold dumbbells in front of thighs, slight knee bend, hinge at hips lowering weight along legs, squeeze glutes to return"
            },
            {
                name: "Plank",
                sets: "3 x 20 sec",
                rest: "30 sec",
                notes: "Engage core",
                props: "Mat (optional)",
                focusAreas: ["Core", "Shoulders"],
                contraindications: "Wrist pain (do on forearms)",
                instructions: "Elbows under shoulders, body straight from head to heels, squeeze glutes and abs, breathe normally"
            }
        ],
        tips: [
            "Focus on perfect form before adding weight",
            "Record yourself to check technique",
            "Rest longer if needed between sets"
        ]
    },
    medium: {
        title: "Muscle Growth Split",
        description: "4-day upper/lower split for balanced hypertrophy. Alternate between upper and lower body workouts with 1 rest day between sessions.",
        exercises: [
            {
                name: "Barbell Bench Press",
                sets: "4 x 8",
                rest: "2 min",
                notes: "Touch chest lightly",
                props: "Barbell, bench",
                focusAreas: ["Chest", "Triceps", "Front delts"],
                contraindications: "Shoulder impingement",
                instructions: "Lie on bench, grip slightly wider than shoulders, lower bar to mid-chest, press up without locking elbows"
            },
            {
                name: "Bent-Over Rows",
                sets: "4 x 10",
                rest: "2 min",
                notes: "Squeeze shoulder blades",
                props: "Barbell/dumbbells",
                focusAreas: ["Upper back", "Biceps"],
                contraindications: "Lower back issues (use chest support)",
                instructions: "Hinge at hips 45°, pull weight to lower ribs, elbows close to body, squeeze shoulder blades together"
            },
            {
                name: "Overhead Dumbbell Press",
                sets: "3 x 10",
                rest: "90 sec",
                notes: "Keep elbows slightly forward",
                props: "Dumbbells",
                focusAreas: ["Shoulders", "Triceps"],
                contraindications: "Neck pain",
                instructions: "Start dumbbells, at shoulder height, press overhead without arching back, lower slowly"
            },
            {
                name: "Back Squats",
                sets: "4 x 8",
                rest: "2 min 30 sec",
                notes: "Depth: thigs parallel to floor",
                props: "Barbell, squat rack",
                focusAreas: ["Quads", "Glutes", "Core"],
                contraindications: "Knee issues (box squat modification)",
                instructions: "Bar on upper back, feet shoulder-width apart, descend until thighs parallel, drive through heels to stand"
            },
            {
                name: "Bulgarian Split Squats",
                sets: "3 x 10",
                rest: "90 sec",
                notes: "Controlled tempo",
                props: "Bench, dumbbells (optional)",
                focusAreas: ["Quads", "Glutes", "Balance"],
                contraindications: "Hip replacements",
                instructions: "One foot elevated behind you, lower until front thigh is parallel, keep torso upright"
            }
        ],
        tips: [
            "Aim for 1-2 reps in reserve each set",
            "Increase weight when you hit top rep range for 2 sessions"
        ]
    },
    challenging: {
        title: "Advanced Powerbuilding Routine",
        description: "Combines strength and hypertrophy. Perform 3-4x/week with at least 1 rest day between sessions.",
        exercises: [
            {
                name: "Barbell Back Squat",
                sets: "5 x 5",
                rest: "3 min",
                notes: "Increase weight each set",
                props: "Barbell, squat rack, belt (optional)",
                focusAreas: ["Quads", "Glutes", "Core"],
                contraindications: "Hernia",
                instructions: "Low bar position, brace core, descend below parallel, explosive ascent while maintaining control"
            },
            {
                name: "Weighted Pull Ups",
                sets: "4 x 6",
                rest: "2 min 30 sec",
                notes: "Add 10-25% bodyweight",
                props: "Dip belt/weight vest",
                focusAreas: ["Lats", "Biceps", "Core"],
                contraindications: "Elbow tendonitis",
                instructions: "Full hang at bottom, pull until chin clears bar, controlled eccentric phase"
            },
            {
                name: "Barbell Bench Press",
                sets: "4 x 6",
                rest: "3 min",
                notes: "Pause at chest",
                props: "Barbell, bench, wrist wraps (optional)",
                focusAreas: ["Chest", "Triceps"],
                contraindications: "Rotator cuff injuries",
                instructions: "1-second pause at chest, no bounce, drive feet into floor for stability"
            },
            {
                name: "Romanian Deadlifts",
                sets: "3 x 8",
                rest: "2 min",
                notes: "Slow eccentric (3 sec)",
                props: "Barbell",
                focusAreas: ["Hamstrings", "Glutes"],
                contraindications: "Disc herniation",
                instructions: "Micro-bend in knees, bar close to body, stop at mid-shin when hamstrings reach full stretch"
            },
            {
                name: "Overhead Press",
                sets: "3 x 8",
                rest: "2 min",
                notes: "Squeeze glutes to stabilize",
                props: "Barbell",
                focusAreas: ["Shoulders", "Triceps"],
                contraindications: "AC joint issues",
                instructions: "Start at clavicle, press vertically, slight lean back at top to engage traps"
            },
            {
                name: "Weighted Dips",
                sets: "3 x 10",
                rest: "90 sec",
                notes: "Lean forward for chest focus",
                props: "Dip belt/weight vest",
                focusAreas: ["Chest", "Triceps"],
                contraindications: "Shoulder instability",
                instructions: "Shoulders depressed, descend until elbows are at 90°, avoid excessive forward lean if shoulders feel strained"
            }
        ],
        tips: [
            "Warm up thoroughly with dynamic stretches and 2 light sets per exercise",
            "Log weights used to track progressive overload",
            "Deload every 6 weeks by reducing volume 50%"
        ]
    },
    yoga: {
        title: "Vinyasa Flow for Strength",
        description: "45-minute dynamic sequence to build functional strength and flexibility. Can be done daily.",
        exercises: [
            {
                name: "Sun Salutation A",
                sets: "3 rounds",
                rest: "5 breaths",
                notes: "Link movement to breath",
                props: "Mat",
                focusAreas: ["Full-body warmup"],
                contraindications: "Wrist-pain (modify to dolphin pose)",
                instructions: "Inhale arms overhead, exhale fold forward, inhale lift chest halfway, exhale step back to plank, lower elbows to ribs, inhale chest forward and thigs off floor, exhale hips up and heels down, repeat"
            },
            {
                name: "Warrior II → Extended Side Angle",
                sets: "5 breaths/side",
                rest: "Transition slowly",
                notes: "Engage glutes, keep front knee at 90°",
                props: "Mat, block (optional)",
                focusAreas: ["Legs", "Hips", "Core"],
                contraindications: "Hip replacements (modify stance)",
                instructions: "From Warrior II (front knee bent, arms, parallel to floor), lower front elbow to inside of front knee, top arm reaches overhead"
            },
            {
                name: "Plank → Chaturanga → Upward Dog",
                sets: "5 flows",
                rest: "Child's Pose (30 sec)",
                notes: "Modify knees-down if needed",
                props: "Mat",
                focusAreas: ["Core", "Shoulders"],
                contraindications: "Wrist or lower back issues",
                instructions: "From plank, lower halway (elbows graze ribs), flip toes and lift chest into upward dog, shoulders over wrists"
            },
            {
                name: "Tree Pose",
                sets: "30 sec/side",
                rest: "Mountain Pose (3 breaths)",
                notes: "Focus on balance, not foot height",
                props: "Wall (for support if needed)",
                focusAreas: ["Balance", "Ankles"],
                contraindications: "Recent ankle sprains",
                instructions: "Stand on one leg, place opposite foot on calf/inner thigh (a void knee), hands at heart center or overhead"
            }
        ],
        tips: [
            "Breathe deeply through nose in all poses",
            "Use block for modifications if needed",
            "End with 5-min Savasana for recovery"
        ]
    }
};

document.querySelectorAll('div.workout-categories button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        displayWorkout(category);
    });
});

// Display chosen workout
const displayWorkout = (category) => {
    const workout = workouts[category];
    document.getElementById('workout-display').innerHTML = `
        <h3>${workout.title}</h3>
    <p class="center">${workout.description}</p>
    <label>Exercise:</label>
    <select id="exercise">
        <option value="none">None selected</option>
        ${workout.exercises.map(e => `
            <option value="${workout.exercises.indexOf(e)}">${e.name}</option>
        `).join('')}
    </select>
    `;
    document.getElementById('exercise').addEventListener('change', (e) => {
        console.log(e.target.value);
        // loadExercise(workout, e.target.value);
    });
}