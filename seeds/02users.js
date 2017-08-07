exports.seed = function(knex, Promise) {

	const bcrypt = require('bcrypt')
	const saltRounds = 8
	const hashOne = bcrypt.hashSync('tyler', saltRounds)
	const hashTwo = bcrypt.hashSync('yousif', saltRounds)
	const hashThree = bcrypt.hashSync('maria', saltRounds)
	const hashFour = bcrypt.hashSync('logan', saltRounds)
	const hashFive = bcrypt.hashSync('trenton', saltRounds)

	// Deletes ALL existing entries
	return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq restart with 6')
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([{
					id: 1,
					name: 'Tyler keesling',
					email: 'tyler.keesling@gmail.com',
					phone: '571345453',
					photo: 'https:www.amazon.com',
					username: 'tyler',
					password: hashOne,
					bio: 'xyz',
					skill_learn: 1
				},
				{
					id: 2,
					name: 'Yousif',
					email: 'yaltimimie@gmail.com',
					phone: '5714840292',
					photo: 'https:www.amazon.com',
					username: 'yousif',
					password: hashTwo,
					bio: 'sdfsdfsdf',
					skill_learn: 2
				},
				{
					id: 3,
					name: 'Maria ',
					email: 'mariajo.mata@gmail.com',
					phone: '571345453',
					photo: 'https:www.amazon.com',
					username: 'maria',
					password: hashThree,
					bio: 'jkj',
					skill_learn: 3
				},
				{
					id: 4,
					name: 'Logan',
					email: 'lcrewss@ymail.com',
					phone: '571345453',
					photo: 'https:www.amazon.com',
					username: 'logan',
					password: hashFour,
					bio: 'ryrty',
					skill_learn: 4
				},
				{
					id: 5,
					name: 'trenton',
					email: 'trenton@gmail.com',
					phone: '571345453',
					photo: 'https:www.amazon.com',
					username: 'trenton',
					password: hashFive,
					bio: 'ryrty',
					skill_learn: 4
				}
			]);
		});
};
