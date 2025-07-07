/*** WORKOUT GUIDES ***/

// Workout db
const workouts = {
    easy: {
        title: 'Beginner Full Body Routine',
        exercises: [
            {name: "Bodyweight Squats", reps: "3 sets of 10 reps (rest for 60 sec)"},
            {name: "Push Ups (Knees Allowed)", reps: "3 sets of 8 reps (rest for 45 sec)"},
            {name: "Plank", reps: "3 sets of 20 sec (rest for 30 sec)"}
        ]
    },
    medium: {
        title: "Intermediate Strength",
        exercises: [
            {name: "Goblet Squats", reps: "4 sets of 8 reps (rest for 90 sec)"},
            {name: "Dumbbell Rows", reps: "3 sets of 10 reps (rest for 60 sec)"}
        ]
    },
    challenging: {

    },
    yoga: {
        title: "Morning Yoga Flow",
        exercises: [
            {name: "Cat-Cow", reps: "5 breaths"},
            {name: "Downward Dog", reps: "30 sec"},
            {name: "Sun Salutations", reps: "5 reps"}
        ]
    }
}