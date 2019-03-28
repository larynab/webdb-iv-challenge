exports.seed = function(knex) {
  return knex('dishs').insert([
    { name: 'American' },
    { name: 'Japanese' },
    { name: 'Pilipino' },
  ]);
};
