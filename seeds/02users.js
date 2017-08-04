
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq restart with 5')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id:1, name: 'Tyler keesling', email: 'tyler.keesling@gmail.com' , phone:'571345453', photo:'https:www.amazon.com', username: 'tylerkeesling', password:'1234',bio:'xyz',skill_learn:1},
        {id:2, name: 'Yousif', email: 'yaltimimie@gmail.com' , phone:'5714840292', photo:'https:www.amazon.com', username: 'YousifTimimie', password:'You@1983',bio:'sdfsdfsdf', skill_learn:2},
        {id:3, name: 'Maria ', email: 'mariajo.mata@gmail.com' , phone:'571345453', photo:'https:www.amazon.com', username: 'maria', password:'4432',bio:'jkj', skill_learn:3},
        {id:4, name: 'Logan', email: 'lcrewss@ymail.com' , phone:'571345453', photo:'https:www.amazon.com', username: 'logan', password:'676',bio:'ryrty', skill_learn:4}
      ]);
    });
};
