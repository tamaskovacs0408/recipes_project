const searchForm = document.querySelector('.js-form');
const recipesContainer = document.querySelector('.js-recipes');
const searchInput = document.querySelector('.js-input');
const errorMessage = document.querySelector('.js-error');

const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

const getApiUrl = search => API_URL + search;

function submitForm(e) {
    e.preventDefault();
    const value = searchInput.value.trim();

    if (value.length > 0) {
        errorMessage.innerHTML = '';
        fetch(getApiUrl(value))
            .then(data => data.json())

    } else {
        errorMessage.innerHTML = 
        `<p id="error_msg">Invalid search: empty input</p>`;
    }
}

searchForm.addEventListener('submit', submitForm);