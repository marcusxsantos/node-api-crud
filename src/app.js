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
const indexRoute = require('./routers/index-router');
const manufacturerRoute = require('./routers/manufacturer-router')
const modelRoute = require('./routers/model-router');
const vehicleRoute = require('./routers/vehicle-router');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/manufacturer', manufacturerRoute);
app.use('/model', modelRoute);
app.use('/vehicle', vehicleRoute);

module.exports = app;