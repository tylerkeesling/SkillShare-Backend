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

// All the skills for the user
router.get('/skills', function(req, res) {
	queries.getUserSkills().then(userSkills => {
		res.json(userSkills)
	})
})

router.get('/:id', function(req, res) {
	queries.getUsersById(req.params.id).then(user => {
		res.json(user)
	})
})

module.exports = router;
