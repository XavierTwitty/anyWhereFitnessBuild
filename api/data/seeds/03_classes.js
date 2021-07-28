
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {name: 'Anywhere Fitness', type:"Running", startTime:"8am", startDate: "3/2/21", location: "Charlotte", duration: 1 , intensity: 10},
        {name: 'Anywhere Fitness', type:"Aerobics", startTime:"12am", startDate: "3/2/21", location: "New York", duration: 2 , intensity: 3},
        {name: 'Anywhere Fitness', type:"Weight Lifting", startTime:"3pm", startDate: "3/2/21", location: "Miami", duration: 2, intensity: 7}
      ]); // error with decimals in duration 
    });
};
