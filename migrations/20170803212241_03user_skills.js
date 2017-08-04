
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_skills' , (table) =>{
    table.increments()
    table.integer('users_id').references('users.id')
    table.integer('skills_id').references('skills.id')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('user_skills')
};
