exports.up = function(knex, Promise) {
	return knex.schema.createTable('user_connections', (table) => {
		table.increments()
		table.integer('userSendInvite_id').references('users.id')
		table.integer('userRecievedInvite_id').references('users.id')
		table.boolean('acceptStatus')
	}).then(function(){
    return knex.schema.alterTable('user_connections', function(t) {
  t.unique(['userSendInvite_id', 'userRecievedInvite_id'])
})
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('user_connections')
};
