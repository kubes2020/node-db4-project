
exports.up = function(knex) {
  return knex.schema.createTable('recipies', tbl =>{
    tbl.increments()
    tbl.string('recipe_name', 128).notNullable()

  })

  .createTable('ingredients', tbl =>{
    tbl.increments()
    tbl.string('ingredient_name', 128).notNullable()
  })
  .createTable('steps', tbl =>{
    tbl.increments()
    tbl.integer('step_order').notNullable()
    tbl.string('instruction', 128).notNullable()
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipies')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  })
  .createTable('ingredients_steps', tbl =>{
      tbl.increments()
      tbl.integer('step_id').notNullable()
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('steps')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      tbl.integer('ingredient_id').notNullable()
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      tbl.integer('quantity', 128).notNullable().unsigned()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExits('ingredients_steps')
    .dropTableIfExits('steps')
    .dropTableIfExits('ingredients')
    .dropTableIfExits('recipies')
  
};
