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
<<<<<<< HEAD
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
=======
    .join('skills','skills.id','user_skills.skills_id')
    .where('user_skills.users_id', id)
    .select('user_skills.id','skills.id as skills_id','skills.name')
	},
  getSuggestedMatchesById: function(id) {
  return knex('user_skills')
	       .join('users', 'users.skill_learn', 'user_skills.skills_id')
				 .where('users.id', id)
				 .select('users.id', 'user_skills.users_id')
				 .then(function (data) {
					 console.log(data);
					var loggedUserId=data[0].id
					var usersCanTeachYou=[]
					for (var i = 0; i < data.length; i++) {
						usersCanTeachYou[i]=data[i].users_id
					}
					return knex('users')
				         .join('user_skills', 'user_skills.skills_id', 'users.skill_learn')
								 .whereIn('users.id', usersCanTeachYou)
								 .where('user_skills.users_id', loggedUserId)
								 .select('users.*' )

				 })
				 .then(function (users) {
				 	var requests =users.map(function(user){
						return knex('users')
						.select('skills.id', 'skills.name')
						.join ('user_skills', 'users.id','user_skills.users_id')
						.join('skills','skills.id','user_skills.skills_id')
						.where('users.id',user.id)
					})
					return Promise.all(requests).then(function(skills_sets){
						console.log(skills_sets)
						return users.map(function(user,i){
							user.skills=skills_sets[i]
							return user
						})
					})
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
  } ,
	sendConnectionInvite: function(body) {
		return knex('user_connections')
		// body should be object contains userSendInvite_id,userRecievedInvite_id,acceptStatus=false
		       .insert(body)
					 .returning('*')
	} ,
	acceptConnectionInvite: function(body) {
		return knex('user_connections')
		       .where({
						 userSendInvite_id: body.userSendInvite_id ,
						 userRecievedInvite_id: body.userRecievedInvite_id
					 })
		       .update({
						 acceptStatus:true
					 })
	} ,
	getInvitesSentByUserId: function(id) {
		return knex(user_connections)
		.where({
			userSendInvite_id: id ,
			acceptStatus: false
		})
	} ,
	getInvitesRecievedByUserId: function(id) {
		return knex(user_connections)
		.where({
			userRecievedInvite_id: id,
			acceptStatus: false
		})
	} ,
	getConnectedByUserId: function(id) {
		return knex.raw('select userSendInvite_id as id from user_connections where userSendInvite_id = ? and acceptStatus=true  union select userRecievedInvite_id as id from user_connections where userRecievedInvite_id = ? and acceptStatus=true ', [id])
>>>>>>> 44044f0a4ce0f2eab0c76b8798a50904dce63ded
	}

} //end module exports
