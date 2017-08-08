var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries')


/* GET users listing. */
router.get('/', function(req, res, next) {
	queries.getUsers().then(users => {
		res.json(users)
	})
})

// GET all the skills for ALL users
router.get('/skills', function(req, res) {
	queries.getUserSkills().then(userSkills => {
		res.json(userSkills)
	})
})

// GET all the skills for one user by ID
router.get('/skills/:id', function(req, res) {
	queries.getUserSkillsById(req.params.id).then(userSkills => {

		res.json(userSkills)

	})
})

// GET individual user by ID
router.get('/:id', function(req, res) {
	queries.getUsersById(req.params.id).then(user => {
		res.json(user)
	})
})

router.put('/:id', function(req, res) {
	queries.updateUserById(req.params.id, req.body).then(data => {
		res.json(data)
	})
})

router.post('/skills/:id', function(req, res) {
	console.log(req.body);
	var requests = req.body.skills_id.map(skill => {
		var userSkill = {
			users_id: req.params.id,
			skills_id: skill
		}
		console.log(userSkill);
		return knex('user_skills')
			.insert(userSkill)
	})
	Promise.all(requests)
		.then(() => {
			res.json({
				message: 'success!!'
			})
		})
		.catch(err => {
			res.json({
				error: err
			})
		})
	// queries.addSkillsToUser(req.body).then(data => {
	// 	res.json(data)
	// })
})

router.delete('/skills/:id/:skillId', function(req, res) {
	queries.deleteSkillsFromUser(req.params.skillId).then(data => {
		// res.json(data)
		res.send({
			message: 'deleted'
		})
	})
})

router.get('/matches/:id', function(req, res) {
	queries.getSuggestedMatchesById(req.params.id).then(data => {
		console.log(data)
		res.json(data)
	})
})

module.exports = router;
router;
