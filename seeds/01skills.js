
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM skills; ALTER SEQUENCE skills_id_seq restart with 7')
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id:1, name: 'Javascript'},
        {id:2, name: 'HTML5'},
        {id:3, name: 'CSS3'},
        {id:4, name: 'AngularJS'},
        {id:5, name: 'ReactJS'},
        {id:6, name: 'Node.js'}
      ]);
    });
};

//
