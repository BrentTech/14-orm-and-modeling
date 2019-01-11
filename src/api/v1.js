'use strict';

const express = require('express');
const modelFinder = require('../middleware/model-finder.js');
const router = express.Router();

router.param('model', modelFinder);

// ROUTES
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);

// FUNCTIONS
/**
 *
 *
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
function handleGetAll(req,response,next) {
  req.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
 *
 *
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
function handleGetOne(req,response,next) {
  req.model.get(req.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
 *
 *
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
function handlePost(req,response,next) {
  console.log('I post');
  req.model.post(req.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


/**
 *
 *
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
function handlePut(req,response,next) {
  req.model.put(req.params.id, req.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 *
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
function handleDelete(req,response,next) {
  req.model.delete(req.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
