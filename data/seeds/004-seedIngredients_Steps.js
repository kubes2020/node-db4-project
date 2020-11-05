
exports.seed = function(knex) {
  
  // Inserts seed entries
  return knex('ingredients_steps').insert([
    { step_id: 1, ingredient_id: 1, quantity: .5 },
    { step_id: 1, ingredient_id: 2, quantity: .05 },
    { step_id: 3, ingredient_id: 3, quantity: .7 },
    { step_id: 4, ingredient_id: 1, quantity: .5 },
    { step_id: 5, ingredient_id: 5, quantity: 1 },
    { step_id: 6, ingredient_id: 4, quantity: 5 },
    { step_id: 7, ingredient_id: 1, quantity: .5 },
    { step_id: 8, ingredient_id: 6, quantity: .05 }
  ]);
};
