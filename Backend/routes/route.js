const express  = require('express');
const route = express.Router();
const {Create} = require('../component/Example')
route.post("/counter",Create);
module.exports = route;