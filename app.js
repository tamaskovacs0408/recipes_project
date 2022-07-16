const form = document.querySelector('.js-form');
const recipesContainer = document.querySelector('.js-recipes');
const searchInput = document.querySelector('.js-input');
const errorMessage = document.querySelector('.js-error');


function submitForm(e) {
    e.preventDefault();
    const value = searchInput.value;

    if (value.length > 0) {
        errorMessage.innerHTML = '';
    } else {
        errorMessage.innerHTML = `<p id="error_msg">Invalid search: empty input</p>`;
    }
}

form.addEventListener('submit', submitForm);