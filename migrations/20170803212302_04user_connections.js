exports.up = function(knex, Promise) {
	return knex.schema.createTable('user_connections', (table) => {
		table.increments()
		table.integer('userSendInvite_id').references('users.id')
		table.integer('userRecievedInvite_id').references('users.id')
		table.boolean('acceptStatus')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('user_connections')
};
