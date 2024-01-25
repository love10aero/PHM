const pgp = require('pg-promise')();
const connectionString = 'postgresql://David:DMD.solutions1@localhost:5432/PHM';

const db = pgp(connectionString);

module.exports = {
  initDB: () => {
    return db.connect();
  },
  query: (text, params) => {
    return db.query(text, params);
  },
};
