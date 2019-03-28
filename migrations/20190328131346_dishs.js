// what new changes we need to make
exports.up = function(knex) {
    return knex.schema.createTable('dishs', function(tbl) {
      tbl.increments();
  
      tbl
        .string('name', 128)
        .notNullable()
        .unique();

    });
  };
  
  //UNDO
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dishs');
  };
  
