'use strict';

const playersSchema = require('./players-schema.js');
const dataModel = require('./model.js');

class Player extends dataModel { }

module.exports = new Player(playersSchema);
