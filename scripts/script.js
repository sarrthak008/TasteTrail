
// load Categarios...

let categoriesContainer = document.querySelector(".categorias-container")


let allCardsInnerHtml = ""

const loadCategories = async () => {
    try {
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
        let data = await response.json()
        if (!data.meals) {
            throw new Error("something went wrong")
        }

        for (let categories of data.meals) {

            allCardsInnerHtml += `<div class="categorie-card">
             <div class="categorie-card-img-container">
                <img src="${categories.strMealThumb}">
             </div>
             <div class="categorie-type">${categories.strMeal}</div>
         </div>`

        }

        categoriesContainer.innerHTML = allCardsInnerHtml

    } catch (error) {
        console.error(error)
    }
}

loadCategories()


// search food 

let loadSearchResult = async (foodIteam) => {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodIteam.split(" ").join("%20")}`)
        let data = await response.json()

        if (!data.meals) {
            return (`opps! result not found for ${foodIteam}`)
        }else{
            console.log(data.meals)
        }

    } catch (error) {
        console.log(error)
    }
}


