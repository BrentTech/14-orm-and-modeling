'use strict';

const teamSchema = require('./team-schema.js');
const dataModel = require('./model.js');

class Team extends dataModel { }

module.exports = new Team(teamSchema);
