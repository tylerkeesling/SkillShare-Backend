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
	queries.updateUserById(req.params.id, req.body).then(() => {
		res.send("update completed")
	})
})

module.exports = router;
