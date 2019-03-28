exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {dishs_id: 1, name: 'Steak and Eggs'},
    {dishs_id: 2, name: 'Sushi'},
    {dishs_id: 3, name: 'Chicken Adobo'}
  ]);
};
