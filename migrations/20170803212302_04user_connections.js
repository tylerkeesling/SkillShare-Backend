exports.up = function(knex, Promise) {
	return knex.schema.createTable('user_connections', (table) => {
		table.increments()
		table.integer('user1_id').references('users.id')
		table.integer('user2_id').references('users.id')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('user_connections')
};
