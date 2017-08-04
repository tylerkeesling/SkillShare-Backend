
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skills',(table) => {
    table.increments()
    table.text('name').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skills')
};
