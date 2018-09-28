'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(config.connectionstring);

//models
const Vehicle = require('./models/vehicle');
const Model = require('./models/model');
const Manufacturer = require('./models/manufacturer');

//rotas


//

module.exports = app;