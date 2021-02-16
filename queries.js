const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shiloh12", // YOUR MYSQL PASSWORD HERE
  database: "fullstackPokemon",
});

connection.connect();

const retrieveAllPokemon = (callback) => {
  let queryString = 'select * from pokemon';
  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

const addNewPokemon = (params, callback) => {
  let queryString = 'insert into pokemon(id, name, level, type, picture) values (?, ?, ?, ?, ?)';
  connection.query(queryString, [params.id, params.name, params.level, params.type, params.picture], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

// Create an addPokemon method that adds a pokemon to the database.

module.exports = {
  retrieveAllPokemon,
  addNewPokemon,
};
