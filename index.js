const env = process.env.NODE_ENV || 'development';

const config = require('./secret')[env];

const express = require('express');
const app = express();
const port = config.server.port;

app.get('/', (req, res) => res.send('Hello Wo!'))

app.listen(port, () => console.log(`Mleming on port ${port}!`))
