/* Setting up the list of all categories */
const url_1 = "https://www.themealdb.com/api/json/v1/1/categories.php",
      categoriesContainer = document.querySelector('.categoriesContainer'),
      categoriesBody = document.querySelector('.categories__body');


window.addEventListener('load', _ => {

    fetch(url_1)
    .then(Response => Response.json())
    .then(data => {

        categoriesContainer.innerHTML = "",

        data.categories.forEach(meal => {

            // for every meal, we'll create a span for it as a category option span
            categoriesContainer.innerHTML += `
                <span class="categories__categorie" data="${meal.strCategory}">${meal.strCategory}</span>
            `;

        });

    })
    .catch(err => {

        console.log(err);
        alert("OUPSS! something went wrong! try to reload the page or check your internet connection");

    });
    
});

/* choosing a category */
categoriesContainer.addEventListener('click', (e) => {

    // console.log("data = ", e.target.getAttribute('data'));
    const url_2 = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.getAttribute('data')}`,
          SpecificCategoryrow   = document.querySelector('.SpecificCategoryrow');

    fetch(url_2)
    .then(Response => Response.json())
    .then(data => {

        SpecificCategoryrow.innerHTML = "";

        data.meals.forEach(meal => {

            SpecificCategoryrow.innerHTML += `
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 wow animate__zoomInDown">
                <div class="categories__meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal__image d-block mx-auto img-fluid">
                    <p class="meal__title">${meal.strMeal}</p>
                </div>
            </div>
            `;

        });

    })
    .catch(err => console.log(err));

});