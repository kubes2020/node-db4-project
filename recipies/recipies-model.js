const db = require('../data/connection.js')

module.exports = {
    getRecipe() {
        return db('recipies')
    },

    getShoppingList(id) {
        return db('recipies')
        .join('steps', 'steps.recipe_id', 'recipies.id')
        .join('ingredients_steps', 'ingredients_steps.step_id', 'steps.id')
        .join('ingredients', 'ingredients.id', 'ingredients_steps.ingredient_id')
        .select('Recipies.recipe_name', 'Ingredients.ingredient_name', 'Ingredients_steps.quantity')
        .where({'recipies.id':id})
    },

    getRecipeSteps(id) {
        return db('recipies')
        .join('steps', 'recipies.id', 'steps.recipe_id')
        .select('recipies.recipe_name', 'steps.instruction')
        .where({'recipies.id': id})
    }

}


// select *
// from recipies

// select 
//     Recipies.recipe_name,
//     Ingredients.ingredient_name,
//     Ingredients_steps.quantity
// from Recipies
// join Steps
//     on steps.recipe_id = recipies.id
// join Ingredients_steps
//     on ingredients_steps.step_id = Steps.id
// join Ingredients
//     on ingredients.id = ingredients_steps.ingredient_id
//     where recipies.id = 1;


// select
//     recipies.recipe_name,
//     steps.instruction
// from Recipies
// join Steps
//     on recipies.id = steps.recipe_id
//     where recipies.id = 3