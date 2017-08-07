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
			.join('skills', 'skills.id', 'user_skills.skills_id')
			.where('user_skills.users_id', id)
			.select('user_skills.id', 'skills.id as skills_id', 'skills.name')
	},
	getSuggestedMatchesById: function(id) {
		return knex('user_skills')
			.join('users', 'users.skill_learn', 'user_skills.skills_id')
			.where('users.id', id)
			.select('users.id', 'user_skills.users_id')
			.then(function(data) {
				var loggedUserId = data[0].id
				var usersCanTeachYou = []
				for (var i = 0; i < data.length; i++) {
					usersCanTeachYou[i] = data[i].users_id
				}
				return knex('users')
					.join('user_skills', 'user_skills.skills_id', 'users.skill_learn')
					.whereIn('users.id', usersCanTeachYou)
					.where('user_skills.users_id', loggedUserId)
					.select('users.*')
			})
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
