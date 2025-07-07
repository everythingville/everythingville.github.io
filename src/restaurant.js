/*** RECIPES ***/

// Recipe DB
const allRecipes = {
    breakfast: {
        title: "",
        recipes: [
            {
                name: "",
                ingredients: [""],
                procedure: [""],
                notesHeading: "",
                notes: ""
            }
        ]
    },
    lunch: {
        title: "",
        recipes: [
            {
                name: "",
                ingredients: [""],
                procedure: [""],
                notesHeading: "",
                notes: ""
            }
        ]
    },
    dinner: {
        title: "",
        recipes: [
            {
                name: "",
                ingredients: [""],
                procedure: [""],
                notesHeading: "",
                notes: ""
            }
        ]
    },
    dessert: {
        title: "",
        recipes: [
            {
                name: "",
                ingredients: [""],
                procedure: [""],
                notesHeading: "",
                notes: ""
            }
        ]
    },
    drinks: {
        title: "",
        recipes: [
            {
                name: "",
                ingredients: [""],
                procedure: [""],
                notesHeading: "",
                notes: ""
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
        <ul>${r.procedure.map(p => `<li>${p}</li>`).join('')}</ul>
        <p><b>${r.notesHeading}:</b> ${notes}</p>
    `;
};