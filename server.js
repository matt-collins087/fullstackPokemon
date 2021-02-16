const express = require("express");
const app = express();
const path = require("path");
const PORT = 3002;
const queries = require('./queries.js');

// Tells express to serve our compiled code from the dist folder.
app.use(express.static(path.join(__dirname, "./dist")));

// Adds middleware that parses JSON
app.use(express.json());

app.get("/api/pokemon", (req, res) => {
  queries.retrieveAllPokemon((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// Write a POST route for the "/api/pokemon" endpoint.

app.post('/api/pokemon', (req, res) => {
  queries.addNewPokemon(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
