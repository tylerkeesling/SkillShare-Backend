var knex = require('./knex')

module.exports = {
  getUsers: function() {
    return knex('users')
  },
  getUsersById: function(id) {
    return knex('users').where('id',id)
  },
  getSkills: function() {
    return knex('skills')

  }

}
