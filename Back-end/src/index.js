const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
require("./config/dbConfig");

app.use(cors());
// Indica ao servidor que ele vai ler/ouvir json
// tanto interpretar como enviar json.
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Para usar as rotas que foram criadas no arquivo.
app.use(routes);

app.listen(process.env.port || 3333, () => {
  console.log("Server listening on port 3333")
});
