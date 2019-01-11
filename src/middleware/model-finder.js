'use strict';

/**
 *
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  console.log('I find');
  let modelName = req.params.model;
  req.model = require(`../models/${modelName}.js`);
  next();
};