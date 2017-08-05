var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries')


/* GET users listing. */

router.get('/', function(req, res) {
	queries.getSkills().then(skills => {
		res.json(skills)
	})
})

module.exports = router;
