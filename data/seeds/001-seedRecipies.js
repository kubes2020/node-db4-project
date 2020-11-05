
exports.seed = function(knex) {
  
      // Inserts seed entries
      return knex('recipies').insert([
        {recipe_name: 'hot chocolate'},
        {recipe_name: 'cereal bowl'},
        {recipe_name: 'fruity smoothie'}
        
      ]);
};
