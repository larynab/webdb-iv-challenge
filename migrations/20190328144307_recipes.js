// what new changes we need to make
exports.up = function(knex) {
    return knex.schema.createTable('recipes', function(tbl) {
      // primary key, called id and make it auto-increment
      tbl.increments();
  
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
  
      // foreign key
      tbl
        .integer('dishs_id') // the column name in this table (users)
        .unsigned()
        .references('id') // primary key in the related (parent) table (roles)
        .inTable('dishs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    });
  };
  
  // how to undo the changes made in the up function
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes');
  };
