const env = process.env.NODE_ENV || 'development';

const config = require('./secret')[env];

const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(helmet());

app.use(express.static(path.join(__dirname, 'front/build')));


//entry
app.get('/', (req, res) =>
  {
    res.status(200).send('Ok');
  }
)

//routes
const gitRoute = require('./routes/git');
app.use('/git', gitRoute);


const port = config.server.port;
app.listen(port, () => console.log(`Mleming on port ${port}!`))
