
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipebook.sqlite3',
    },
    useNullAsDefault: true, // needed for sqlite
    // by default SQLite will not enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // enforce FK
      },
    },
  },
};
