require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const app = express();
const { NODE_ENV } = require('./config')

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, boilerplate!');
});

module.exports = app;