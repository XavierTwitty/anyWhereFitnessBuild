
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'luckyLue', password: '1234', email:'goo@aol.com', role_name:'instructor', class_id: 2},
        {username: 'nojumper', password: '1234', email:'foo@aol.com', role_name:'student', class_id: 3},
        {username: 'earlyBird', password: '1234', email:'zoo@aol.com', role_name:'student', class_id: 1},
        {username: 'Jonjocaob', password: '1234', email:'gman@aol.com', role_name:'student'},

      ]);
    });
};
