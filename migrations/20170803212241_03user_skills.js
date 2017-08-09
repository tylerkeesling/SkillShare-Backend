
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_skills' , (table) =>{
    table.increments()
    table.integer('users_id').references('users.id')
    table.integer('skills_id').references('skills.id')
  }).then(function(){
    return knex.schema.alterTable('user_skills', function(t) {
  t.unique(['users_id', 'skills_id'])
})
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('user_skills')
};
