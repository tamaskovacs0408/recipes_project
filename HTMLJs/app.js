const searchForm = document.querySelector('.js-form');
const recipesContainer = document.querySelector('.js-recipes');
const searchInput = document.querySelector('.js-input');
const errorMessage = document.querySelector('.js-error');

const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

const getApiUrl = search => API_URL + search;

function recipesRendering(response) {
    let meals = response.meals;
    let htmlContent = '';
    if (meals === null) {
        recipesContainer.innerHTML = `<p id="no_result">No results.</p>`;
    }
    for(let meal of meals) {
        htmlContent += `
            <div class="recipe">
                <h2 id="meal_name">${meal.strMeal}</h2>
                <img class="recipe__img" src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                <p class="recipe__instructions">${meal.strInstructions}</p>
                <p id="recipe__source"><a target="_blank" href="${meal.strSource}">Source</a></p>
            </div>`
            }
        
    if (htmlContent.length > 0) {
        recipesContainer.innerHTML = htmlContent;
    }
}

function submitForm(e) {
    e.preventDefault();
    const value = searchInput.value.trim();
    recipesContainer.innerHTML = '';
    
    if (value.length > 0) {
        errorMessage.innerHTML = '';
        fetch(getApiUrl(value))
            .then(data => data.json())
            .then(recipesRendering);
    } else {
        errorMessage.innerHTML = 
        `<p id="error_msg">Invalid search: empty input</p>`;
    }
}

searchForm.addEventListener('submit', submitForm);