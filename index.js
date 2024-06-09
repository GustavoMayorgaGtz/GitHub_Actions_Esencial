const express = require('express');
const parser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.post('/data', (req, res) => {
    const { name } = req.body;
    if (name) {
      res.status(200).send(`Hello, ${name}!`);
    } else {
      res.status(400).send('Bad Request: name is required');
    }
  });

app.listen(5000, () => {
    console.log("Servidor iniciado en el puerto 5000");
})

module.exports = app