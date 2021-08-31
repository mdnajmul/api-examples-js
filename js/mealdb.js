const loadMeals = () => {
    const searchField = document.getElementById('search-field').value;
    if(searchField != ''){
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
    }
    else{
        //clear meal display section
        document.getElementById('meals').textContent = '';
        //clear meal details section
        document.getElementById('meal-details').textContent = '';
        alert('Please write any meals name!');
    }
};


const displayMeals = meals => {
    const mealContainer = document.getElementById('meals');
    //clear search field
    document.getElementById('search-field').value = '';
    //clear meal display section
    mealContainer.textContent = '';
    //clear meal details section
    document.getElementById('meal-details').textContent = '';
    if(meals){
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div onclick="loadMealDetails(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top img-fluid p-3" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                    </div>
                </div>
            `;
            mealContainer.appendChild(div);
        });
    }
    else{
        const h3 = document.createElement('h3');
        h3.classList.add('text-center');
        h3.classList.add('mx-auto');
        h3.classList.add('mt-5');
        h3.classList.add('text-danger');
        h3.innerText = 'No Data Found!';
        mealContainer.appendChild(h3);
    }
};


const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
};


const displayMealDetails = meal => {
    const detailsContainer = document.getElementById('meal-details');
    detailsContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('w-50');
    div.classList.add('mx-auto');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top img-fluid p-3" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Details on Youtube</a>
        </div>
    `;
    detailsContainer.appendChild(div);
};