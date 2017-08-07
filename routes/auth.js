const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/login', function(req, res, next) {
	knex('users').where('username', req.body.username)
		.then(user => {
			if (user.length === 0) {
				res.json({
					error: 'Email or password did not match.'
				})
			} else {
				var match = bcrypt.compareSync(req.body.password, user[0].password)
				if (match) {
					let token = jwt.sign(user[0], process.env.TOKEN_SECRET)
					res.json({
						data: token
					})
				} else {
					res.json({
						error: 'Username or password did not match.'
					})
				}
			}
		})
		.catch(err => {
			res.json(err)
		})
})

module.exports = router
