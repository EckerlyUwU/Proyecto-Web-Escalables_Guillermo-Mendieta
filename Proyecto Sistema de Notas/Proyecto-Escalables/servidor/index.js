const express = require('express');
const conectarDB = require('./config/db')
const cors = require("cors");

const app = express();

conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/notas', require('./routes/nota'));

app.listen(4000, () => {
    console.log("El servidor esta corriendo correctamente")
})