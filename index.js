const express = require('express');
const parser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log("Bienvenido al servidor");
    res.status(200).send("Bienvenido al servidor");
})

app.listen(5000, () => {
    console.log("Servidor iniciado en el puerto 5000");
})
