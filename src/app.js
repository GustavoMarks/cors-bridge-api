'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const controller = require('./controller');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  exposedHeaders: '*'
}));

app.get('/', controller.index);

module.exports = app;