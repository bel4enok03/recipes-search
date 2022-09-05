const inputSearch = document.querySelector('#searh');
const recipes = document.querySelectorAll('.recipes');

inputSearch.addEventListener('keyup', (event) => {
        const word = event.target.value.toLowerCase();
        recipes.forEach(recipe => {
            recipe.querySelector('p').textContent.toLowerCase().includes(word) ? (recipe.style.display = 'block') : (recipe.style.display = 'none');
        });
    }) 
