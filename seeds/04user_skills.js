exports.seed = function(knex, Promise) {
<<<<<<< HEAD
	// Deletes ALL existing entries
	return knex.raw('DELETE FROM user_skills; ALTER SEQUENCE user_skills_id_seq RESTART WITH 8')
		.then(function() {
			// Inserts seed entries
			return knex('user_skills').insert([{
					id: 1,
					users_id: 1,
					skills_id: 4
				},
				{
					id: 2,
					users_id: 1,
					skills_id: 2
				},
				{
					id: 3,
					users_id: 2,
					skills_id: 1
				},
				{
					id: 4,
					users_id: 3,
					skills_id: 1
				},
				{
					id: 5,
					users_id: 3,
					skills_id: 5
				},
				{
					id: 6,
					users_id: 4,
					skills_id: 3
				},
				{
					id: 7,
					users_id: 4,
					skills_id: 2
				}
			]);
		});
=======
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM user_skills; ALTER SEQUENCE user_skills_id_seq RESTART WITH 10')
    .then(function () {
      // Inserts seed entries
      return knex('user_skills').insert([
        {id: 1, users_id: 1 , skills_id:4},
        {id: 2, users_id: 1 , skills_id:2},
        {id: 3, users_id: 2 , skills_id:1},
        {id: 4, users_id: 3 , skills_id:1},
        {id: 5, users_id: 3 , skills_id:5},
        {id: 6, users_id: 4 , skills_id:3},
        {id: 7, users_id: 4 , skills_id:2},
        {id: 8, users_id: 5 , skills_id:1},
        {id: 9, users_id: 5 , skills_id:2}
      ]);
    });
>>>>>>> 9035632b5424f32324ab74b1acfb5818febc1e6a
};
