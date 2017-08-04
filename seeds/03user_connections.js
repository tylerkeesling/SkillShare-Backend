
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM user_connections; ALTER SEQUENCE user_connections_id_seq RESTART WITH 1')
};
