/*** RECIPES ***/

// Recipe DB
const allRecipes = {
    breakfast: {
        title: "Breakfast",
        recipes: [
            {
                name: "Scrambled Eggs",
                ingredients: ["2 large eggs", "1 tbsp butter", "1 tbsp milk (optional)", "Salt and pepper to taste"],
                procedure: ["Crack eggs into a bowl, add milk, and whisk until fully blended", "Melt butter in a non-stick pan over low heat", "Pour in eggs, wait 10 sec, then gently push them toward the center with a spatula as they set", "Repeat until eggs are softly set (about 3 min), and remove from heat (they'll finish cooking on the plate)", "Season with salt and pepper"],
                notesHeading: "Pro Tip",
                notes: "Low heat = creamy eggs, high eat = rubbery eggs"
            },
            {
                name: "Oatmeal with Banana and Peanut Butter",
                ingredients: ["1/2 cup rolled oats", "1 cup milk (or water)", "1/2 banana, sliced", "1 tbsp peanut butter", "Pinch of cinammon"],
                procedure: ["Combine oats and milk in a pot, bring to a gentle boil, and then reduce heat", "Simmer for 5 min, stirring occasionally", "Top with banana, peanut butter, and cinammon"],
                notesHeading: "Pro Tip",
                notes: "For creamier oats, use milk instead of water"
            },
            {
                name: "Avocado Toast",
                ingredients: ["1 slice whole-grain bread", "1/2 ripe avocado", "Salt and pepper to taste", "Red pepper flakes (optional)"],
                procedure: ["Toast bread until golden", "Mash avocado with a fork and spread on toast", "Season with salt, pepper, and red pepper flakes"],
                notesHeading: "Upgrade",
                notes: "Add a poached egg on top for extra protein"
            },
            {
                name: "Yogurt Parfait",
                ingredients: ["1 cup Greek yogurt", "1/2 cup granola", "1/2 cup mixed berries"],
                procedure: ["Layer yogurt, granola, and berries in a bowl or glass", "Repeat layers", "Serve immediately"],
                notesHeading: "Fix It",
                notes: "If too tart, drizzle with honey"
            }
        ]
    },
    lunch: {
        title: "Lunch",
        recipes: [
            {
                name: "Grilled Cheese",
                ingredients: ["2 slices bread", "1 tbsp butter", "1 slice cheddar cheese"],
                procedure: ["Butter one side of each bread slice", "Place cheese between unbuttered sides", "Heat pan over medium-low heat, and cook sandwich 2-3 min per side until golden", "Press down lightly with a spatula to melt cheese evenly"],
                notesHeading: "Fix It",
                notes: "Burned outside? Lower heat next time"
            },
            {
                name: "Tuna Salad Sandwich",
                ingredients: ["1 can tuna (in water), drained", "1 tbsp mayonnaise", "1 tsp lemon juice", "2 slices bread", "Lettuce (optional)"],
                procedure: ["Mix tuna, mayo, and lemon juice in a bowl", "Spread on bread and add lettuce if desired"],
                notesHeading: "Pro Tip",
                notes: "Add diced celery for crunch"
            },
            {
                name: "Veggie Wrap",
                ingredients: ["1 whole-wheat tortilla", "2 tbsp hummus", "1/4 cup shredded carrots", "1/4 cup spinach", "3 slices cucumber"],
                procedure: ["Spread hummus on tortilla", "Layer veggies in the center", "Roll tightly and slice in half"],
                notesHeading: "Upgrade",
                notes: "Add feta cheese for extra flavor"
            },
            {
                name: "Egg Salad",
                ingredients: ["2 hard-boiled eggs, chopped", "1 tbsp mayonnaise", "1 tsp mustard", "Salt and pepper to taste"],
                procedure: ["Mix all ingredients in a bowl", "Serve on bread or crackers"],
                notesHeading: "Fix It",
                notes: "Too dry? Add a splash of milk"
            }
        ]
    },
    dinner: {
        title: "Dinner",
        recipes: [
            {
                name: "Pasta with Jarred Sauce",
                ingredients: ["2 oz pasta (1/2 cup dry)", "1/2 cup jarred marinara sauce", "1 tbsp grated Parmesan"],
                procedure: ["Boil 4 cups water in a pot, add pasta, and cook for time on package (usually 9-12 min)", "Drain pasta, return to pot, stir in sauce, and heat for 1 min", "Top with Parmesan"],
                notesHeading: "Upgrade",
                notes: "Add frozen veggies to boiling water 3 min before pasta is done"
            },
            {
                name: "Stir-Fried Rice",
                ingredients: ["1 cup cooked rice (day-old works best", "1/2 cup frozen mixed veggies", "1 egg", "1 tbsp soy sauce", "1 tbsp oil"],
                procedure: ["Heat oil in a pan, add veggies, and cook for 3 min", "Push veggies aside, and scramble the egg in the pan", "Add rice and soy sauce, and stir-fry for 2 min"],
                notesHeading: "Pro Tip",
                notes: "Use cold rice to prevent mushiness"
            },
            {
                name: "Baked Chicken Thighs",
                ingredients: ["2 chicken thighs", "1 tbsp olive oil", "Salt and pepper to taste", "1/2 tsp paprika"],
                procedure: ["Preheat oven to 375°F (190°C)", "Toss chicken with oil, salt, pepper, and paprika", "Bake for 25-30 min until no pink remains"],
                notesHeading: "Upgrade",
                notes: "Add lemon slices before baking"
            },
            {
                name: "Black Bean Tacos",
                ingredients: ["1/2 can black beans, drained", "2 small tortillas", "1/4 cup shredded cheese", "2 tbsp salsa"],
                procedure: ["Heat beans in a pot for 3 min", "Fill tortillas with beans, cheese, and salsa"],
                notesHeading: "Fix It",
                notes: "Too bland? Add cumin or hot sauce"
            }
        ]
    },
    dessert: {
        title: "Dessert",
        recipes: [
            {
                name: "Microwave Mug Cake",
                ingredients: ["4 tbsp flour", "2 tbsp sugar", "2 tbsp milk", "1 tbsp vegetable oil", "1 tbsp cocoa powder (optional)"],
                procedure: ["Mix all ingredients in a microwave-safe mig until smooth", "Microwave for 1 min 30 sec (add 10 sec if needed)", "Let cool 1 min, and eat with a spoon"],
                notesHeading: "Test Doneness",
                notes: "Toothpick should come out clean"
            },
            {
                name: "Chocolate-Dipped Strawberries",
                ingredients: ["5 strawberries", "1/4 cup dark chocolate chips"],
                procedure: ["Melt chocolate in microwave (30 sec bursts,stir between)", "Dip strawberries halfway, and place on parchment paper", "Chill for 10 min"],
                notesHeading: "Pro Tip",
                notes: "Use room-temperature berries for better coating"
            },
            {
                name: "Peanut Butter Cookies",
                ingredients: ["1 cup peanut butter", "1/2 cup sugar", "1 egg"],
                procedure: ["Mix all ingredients in a bowl", "Roll into balls, and flatten with a fork", "Bake at 350°F (175°C) for 10 min"],
                notesHeading: "Upgrade",
                notes: "Press chocolate chips into cookies before baking"
            },
            {
                name: 'Banana "Ice Cream"',
                ingredients: ["1 frozen banan, sliced", "1 tbsp peanut butter (optional)"],
                procedure: ["Blend banana in a food processor until creamy", "Swirl in peanut butter"],
                notesHeading: "Fix It",
                notes: "Too thick? Add a splash of milk"
            }
        ]
    },
    drinks: {
        title: "Drinks",
        recipes: [
            {
                name: "Iced Honey Lemon Tea",
                ingredients: ["1 tea bag (black or green)", "1 cup hot water", "1 tsp honey", "1/2 lemon, sliced", "Ice cubes"],
                procedure: ["Steep tea in hot water for 3 min, and remove bag", "Stir in honey until dissolved", "Add lemon slices and ice"],
                notesHeading: "Variation",
                notes: "Use mint leaves instead of lemon for a fresh twist"
            },
            {
                name: "Vanilla Almond Smoothie",
                ingredients: ["1 cup almond milk", "1 banana", "1/2 tsp vanilla extract", "1 tsp honey"],
                procedure: ["Blend all ingredients until smooth", "Serve and enjoy"],
                notesHeading: "Pro Tip",
                notes: "Add ice for a thicker texture"
            },
            {
                name: "Iced Coffee",
                ingredients: ["1 cup brewed coffee, cooled", "1 tbsp cream", "1 tsp sugar"],
                procedure: ["Pour coffee over ice", "Stir in cream and sugar"],
                notesHeading: "Upgrade",
                notes: "Add a dash of cinnamon"
            },
            {
                name: "Cucumber Mint Water",
                ingredients: ["4 slices cucumber", "5 mint leaves", "1 cup water"],
                procedure: ["Muddle cucumber and mint in a glass", "Add water and ice, and let sit for 5 min"],
                notesHeading: "Fix It",
                notes: "Too mild? Add lemon slices"
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

// Display recipes from chosen category
const displayRecipe = (category) => {
    if (category == 'surprise') {
        const categories = Object.keys(allRecipes);
        category = categories[Math.floor(Math.random() * categories.length)];
        const recipes = allRecipes[category];
        const recipeIndex = Math.floor(Math.random() * recipes.recipes.length);
        document.getElementById('recipe-display').innerHTML = `
            <h3>${recipes.recipes[recipeIndex].name}</h3>
            <div id="recipe-info"></div>
        `;
        loadRecipe(recipes, recipeIndex);
    } else {
        const recipes = allRecipes[category];
        document.getElementById('recipe-display').innerHTML = `
            <h3>${recipes.title}</h3>
            <label>Recipe:</label>
            <select id="recipe">
                <option value="" selected disabled>Select a recipe</option>
                ${recipes.recipes.map(r => `
                    <option value="${recipes.recipes.indexOf(r)}">${r.name}</option>
                `).join('')}
            </select>
            <div id="recipe-info"></div>
        `;
        document.getElementById('recipe').addEventListener('change', (e) => {
            loadRecipe(recipes, e.target.value);
        });
    }
};

// Display chosen recipe
const loadRecipe = (recipes, index) => {
    const r = recipes.recipes[index];
    document.getElementById('recipe-info').innerHTML = `
        <b>Ingredients:</b>
        <ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <b>Procedure:</b>
        <ol>${r.procedure.map(p => `<li>${p}</li>`).join('')}</ol>
        <p><b>${r.notesHeading}:</b> ${r.notes}</p>
    `;
};