for (let i = 1; i <= 20; i++) {
    const value = meal[`strIngredients${i}`];
    if (typeof value === 'string' && value.length > 0) {
        recipesContainer.innerHTML = `<li>${meal[value]}</li>`;
    }
}