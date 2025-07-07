/*** WORKOUT GUIDES ***/

// Workout db
const workouts = {
    easy: {
        title: 'Foundational Strength Routine',
        description: "Full-body workout to build basic strength and movement patterns. Perform 2-3x/week with at least 1 rest day between sessions.",
        exercises: [
            {
                name: "Bodyweight Squats",
                sets: "3 x 10",
                rest: "60 sec",
                notes: "Keep knees aligned with toes"
            },
            {
                name: "Incline Push Ups",
                sets: "3 x 8",
                rest: "60 sec",
                notes: "Hands on bench/table"
            },
            {
                name: "Assisted Pull Ups",
                sets: "3 x 6",
                rest: "90 sec",
                notes: "Use band or assisted machine"
            },
            {
                name: "Dumbbell Romanian Deadlifts",
                sets: "3 x 10",
                rest: "60 sec",
                notes: "Soft knees, hinge at hips"
            },
            {
                name: "Plank",
                sets: "3 x 20 sec",
                rest: "30 sec",
                notes: "Engage core"
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
                name: "Barbell Bench Press (Upper Body)",
                sets: "4 x 8",
                rest: "2 min",
                notes: "Touch chest lightly (Upper Body)"
            },
            {
                name: "Bent-Over Rows (Upper Body)",
                sets: "4 x 10",
                rest: "2 min",
                notes: "Squeeze shoulder blades"
            },
            {
                name: "Overhead Dumbbell Press (Upper Body)",
                sets: "3 x 10",
                rest: "90 sec",
                notes: "Keep elbows slightly forward"
            },
            {
                name: "Back Squats",
                sets: "4 x 8",
                rest: "2 min 30 sec",
                notes: "Depth: thigs parallel to floor"
            },
            {
                name: "Bulgarian Split Squats",
                sets: "3 x 10",
                rest: "90 sec",
                notes: "Controlled tempo"
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
                notes: "Increase weight each set"
            },
            {
                name: "Weighted Pull Ups",
                sets: "4 x 6",
                rest: "2 min 30 sec",
                notes: "Add 10-25% bodyweight"
            },
            {
                name: "Barbell Bench Press",
                sets: "4 x 6",
                rest: "3 min",
                notes: "Pause at chest"
            },
            {
                name: "Romanian Deadlifts",
                sets: "3 x 8",
                rest: "2 min",
                notes: "Slow eccentric (3 sec)"
            },
            {
                name: "Overhead Press",
                sets: "3 x 8",
                rest: "2 min"
            },
            {
                name: "Weighted Dips",
                sets: "3 x 10",
                rest: "90 sec",
                notes: "Lean forward for chest focus"
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
                notes: "Link movement to breath"
            },
            {
                name: "Warrior II → Extended Side Angle",
                sets: "5 breaths/side",
                rest: "Transition slowly",
                notes: "Engage glutes, keep front knee at 90°"
            },
            {
                name: "Plank → Chaturanga → Upward Dog",
                sets: "5 flows",
                rest: "Child's Pose (30 sec)",
                notes: "Modify knees-down if needed"
            },
            {
                name: "Tree Pose",
                sets: "30 sec/side",
                rest: "Mountain Pose (3 breaths)",
                notes: "Focus on balance, not foot height"
            }
        ],
        tips: [
            "Breathe deeply through nose in all poses",
            "Use block for modifications if needed",
            "End with 5-min Savasana for recovery"
        ]
    }
}