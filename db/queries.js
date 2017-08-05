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
    .select('skills.id','skills.name')
	}
}
