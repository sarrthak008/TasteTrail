
let result = JSON.parse(localStorage.getItem("searchRes"))
console.log(result[0])

let ingredientContainer = document.querySelector(".main-ingredients-container");
let mainrecipeContainer = document.querySelector(".main-recipe-container")


const createIngredients = (allinfo) => {
    let mainIngredients = []
    let ingredientsName = []
    let ingredientsQuantity = []
    let mainInnerHtml = ""

    for (let ingredients in allinfo) {
        if (ingredients.includes("strIngredient") || ingredients.includes("strMeasure")) {
            mainIngredients.push(allinfo[ingredients])
        }
    }

     for(let i = 0 ; i < mainIngredients.length/2 ; i++){
        ingredientsName.push(mainIngredients[i])
     }

     for(let i = mainIngredients.length/2 ; i < mainIngredients.length ; i++){
        ingredientsQuantity.push(mainIngredients[i])
     }

     ingredientsName = ingredientsName.filter((i)=> i !== "" && i !== " ")
     ingredientsQuantity = ingredientsQuantity.filter((i)=> i !== " " && i !== "")

     for(let i = 0 ; i < ingredientsName.length ; i++){
         mainInnerHtml += `<span class="ingredient-body">${ingredientsName[i]} : ${ingredientsQuantity[i]}</span>`
     }

     return mainInnerHtml

}


const createRecipeCrads = ()=>{
  let cardsHtml = ""
   for(let i=0 ; i < result.length ; i++){
     cardsHtml += `<div class="recipe-card-body">
           <h3>${result[i].strMeal}</h3>
           <div class="recipe-info-container">
                <div class="recipe-image">
                   <img src="${result[i].strMealThumb}">
                </div>
                <div class="recipe-info">
                    <div>
                        <h2>Ingredients </h2>
                        <p class="main-ingredients-container">
                             ${createIngredients(result[i])}
                        </p>
                        <h2>Instructions</h2>
                        <p class="instructions">${result[0].strInstructions}</p>

                         <h2>Sources</h2>
                         <a href="${result[0].strSource}" target="_blank">${result[0].strSource}</a>
                         <a href="${result[0].strYoutube}" target="_blank">${result[0].strYoutube}</a>

                    </div>
                </div>
           </div>
       </div>`
   }


   return cardsHtml

}


let cardsHTml = createRecipeCrads()
mainrecipeContainer.innerHTML = cardsHTml
