
// load Categarios...

const loadCategories = async () => {
    try {
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        let data = await response.json()
        console.log(data.categories)
    } catch (error) {

    }
}

loadCategories()