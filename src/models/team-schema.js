'use strict';

const players = require('./players-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const team = mongoose.Schema({
  name: { type:String, required:true },
  description: {type:String, required:true},
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}});

team.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne: false,
});

team.pre('find', function() {
  try {
    this.populate('players');
  }
  catch(e) {console.log('Find Error', e); }
});

team.pre('save', function() {
  try {
    this.description = `The one and only, ${this.name}! ${this.description} - is what you need to know.`;
  }
  catch(e) {console.log('Find Error', e); }
});

module.exports = mongoose.model('team', team);
