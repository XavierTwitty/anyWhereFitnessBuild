
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {name: 'Anywhere Fitness', type:"Running", startTime:"8am", startDate: "3/1/21", location: "Miami Gardens", duration: 1 , intensity: 10, user_id : 2},
        {name: 'Anywhere Fitness', type:"Aerobics", startTime:"12am", startDate: "3/2/21", location: "Clearwater", duration: 2 , intensity: 3 , user_id: 1},
        {name: 'Anywhere Fitness', type:"Zumba", startTime:"2pm", startDate: "3/3/21", location: "Tampa", duration: 2, intensity: 7, user_id: 3},
        {name: 'Anywhere Fitness', type:"Weight Lifting", startTime:"3pm", startDate: "3/4/21", location: "Miami", duration: 2, intensity: 7, user_id: 2}
      ]); // error with decimals in duration 
    });
};
