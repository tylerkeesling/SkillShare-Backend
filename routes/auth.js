const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

router.get('/', function(req, res) {
	res.json({
		message: 'working'
	})
})

router.post('/login', function(req, res, next) {
	console.log(req.body);
	knex('users').where('username', req.body.username)
		.then(user => {
			if (user.length === 0) {
				res.json({
					error: 'Email or password did not match.'
				})
			}
		})
	// 	.then(user => {
	// 		// do they exist
	// 		if (user.length === 0) {
	// 			res.json({
	// 				error: 'Email or password did not match.'
	// 			})
	// 		} else {
	// 			var match = bcrypt.compareSync(req.body.password, user[0].password)
	// 			if (match) {
	// 				// login
	// 				delete user[0].password
	// 				var token = jwt.sign(user[0], 'secret_token')
	// 				res.json({
	// 					data: token
	// 				})
	// 			} else {
	// 				res.json({
	// 					error: 'Email or password did not match.'
	// 				})
	// 			}
	// 		}
	// 	})
})

module.exports = router
