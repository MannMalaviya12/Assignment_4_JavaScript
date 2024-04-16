const apiKey = 'eb05df76bb964678a89c063b7a14362b'; //API KEY from Spoonacular

async function fetchRecipes() {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayRecipes(data.recipes);
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = ''; // It Clears previous recipes
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" style="width:100px;height:auto;">
            <p>${recipe.summary}</p>
        `;
        recipesContainer.appendChild(recipeElement);
    });
}

fetchRecipes();  // Call the function at the end of the script to run it as soon as script is loaded
