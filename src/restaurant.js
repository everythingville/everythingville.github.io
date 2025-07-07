/*** RECIPES ***/

// Recipe DB
const allRecipes = {
    breakfast: {
        title: "Breakfast",
        recipes: [
            {
                name: "Fluffy Scrambled Eggs",
                ingredients: ["2 large eggs", "1 tbsp butter", "1 tbsp milk (optional)", "Salt & pepper to taste"],
                procedure: ["Crack eggs into a bowl, add milk, and whisk until fully blended", "Melt butter in a non-stick pan over low heat", "Pour in eggs, wait 10 sec, then gently push them toward the center with a spatula as they set", "Repeat until eggs are softly set (about 3 min), and remove from heat (they'll finish cooking on the plate)", "Season with salt and pepper"],
                notesHeading: "Pro Tip",
                notes: "Low heat = creamy eggs, high eat = rubbery eggs"
            }
        ]
    },
    lunch: {
        title: "Lunch",
        recipes: [
            {
                name: "5-Minute Grilled Cheese",
                ingredients: ["2 slices bread", "1 tbsp butter", "1 slice cheddar cheese"],
                procedure: ["Butter one side of each bread slice", "Place cheese between unbuttered sides", "Heat pan over medium-low heat, and cook sandwich 2-3 min per side until golden", "Press down lightly with a spatula to melt cheese evenly"],
                notesHeading: "Fix It",
                notes: "Burned outside? Lower heat next time"
            }
        ]
    },
    dinner: {
        title: "Dinner",
        recipes: [
            {
                name: "Pasta with Jarred Sauce",
                ingredients: ["2 oz pasta (1/2 cup dry)", "1/2 cup jarred marinara sauce", "1 tbsp grated Parmesan"],
                procedure: ["Boil 4 cups water in a pot, add pasta, and cook for time on package (usually 9-12 minutes)", "Drain pasta, return to pot, stir in sauce, and heat for 1 min", "Top with Parmesan"],
                notesHeading: "Upgrade",
                notes: "Add frozen veggies to boiling water 3 minutes before pasta is done"
            }
        ]
    },
    dessert: {
        title: "Dessert",
        recipes: [
            {
                name: "Microwave Mug Cake",
                ingredients: ["4 tbsp flour", "2 tbsp sugar", "2 tbsp milk", "1 tbsp vegetable oil", "1 tbsp cocoa powder (optional)"],
                procedure: ["Mix all ingredients in a microwave-safe mig until smooth", "Microwave for 1 min 30 sec (add 10 sec if needed)", "Let cool 1 minute, and eat with a spoon"],
                notesHeading: "Test Doneness",
                notes: "Toothpick should come out clean"
            }
        ]
    },
    drinks: {
        title: "Drinks",
        recipes: [
            {
                name: "Iced Honey Lemon Tea",
                ingredients: ["1 tea bag (black or green)", "1 cup hot water", "1 tsp honey", "1/2 lemon, sliced", "Ice cubes"],
                procedure: ["Steep tea in hot water for 3 minutes, and remove bag", "Stir in honey until dissolved", "Add lemon slices and ice"],
                notesHeading: "Variation",
                notes: "Use mint leaves instead of lemon for a fresh twist"
            }
        ]
    }
};

document.querySelectorAll('div.recipe-categories button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        displayRecipe(category);
    });
});

// Display recipe from chosen category
const displayRecipe = (category) => {
    const recipes = allRecipes[category];
    document.getElementById('recipe-display').innerHTML = `
        <h3>${recipes.title}</h3>
        <label>Recipe:</label>
        <select id="recipe">
            ${recipes.recipes.map(r => `
                <option value="${recipes.recipes.indexOf(r)}">${r.name}</option>
            `).join('')}
        </select>
        <div id="recipe-info"></div>
    `;

    const randIndex = Math.floor(Math.random() * recipes.recipes.length);
    document.getElementById('recipe').selectedIndex = randIndex;
    loadRecipe(recipes, randIndex);
    document.getElementById('recipe').addEventListener('change', (e) => {
        loadRecipe(recipes, e.taget.value);
    });
};

// Display chosen recipe (automatically loads random)
const loadRecipe = (recipes, index) => {
    const r = recipes.recipes[index];
    document.getElementById('recipe-info').innerHTML = `
        <b>Ingredients:</b>
        <ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <b>Procedure:</b>
        <ol>${r.procedure.map(p => `<li>${p}</li>`).join('')}</ol>
        <p><b>${r.notesHeading}:</b> ${notes}</p>
    `;
};