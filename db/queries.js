var knex = require('./knex')

module.exports = {
	getUsers: function() {
		return knex('users')
	},
	getUsersById: function(id) {
		return knex('users').where('id', id)
	},
	getSkills: function() {
		return knex('skills')
	},
	getUserSkills: function() {
		return knex('user_skills')
	},
	getUserSkillsById: function(id) {
		return knex('user_skills')
    .join('skills','skills.id','user_skills.skills_id')
    .where('user_skills.users_id', id)
    .select('user_skills.id','skills.id as skills_id','skills.name')
	},
  getSuggestedMatchesById: function(id) {
    console.log('not working yet');
	},
  updateUserById: function(id, body) {
    return knex('users')
      .where('id', id)
      .update(body)
      .returning('*')
  },
  addSkillsToUser: function(body) {
    return knex('user_skills')
    .insert(body)
    .returning('*')
  },
  deleteSkillsFromUser: function(id) {
    return knex('user_skills')
    .del()
    .where('id', id)
    .returning('*')
  }

} //end module exports
