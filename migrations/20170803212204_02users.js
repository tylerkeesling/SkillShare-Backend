
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.text('name').notNullable()
    table.text('email')
    table.text('bio')
    table.text('phone')
    table.text('photo')
    table.text('username')
    table.text('password')
    table.integer('skill_learn').references('skills.id')


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
