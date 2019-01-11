'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const players = mongoose.Schema({
  name: { type:String, required:true },
  position: { type:String, required:true },
  team: {type:String, required:true},
});


players.pre('save', function() {
  try {
    this.position = `${this.position}, as of now.`;
  }
  catch(e) {console.log('Find Error', e); }
});

module.exports = mongoose.model('players', players);
