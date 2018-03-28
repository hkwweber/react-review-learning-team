'use strict'
const apiRouter = require('express').Router();
const db = require('../db/models')
const foodRouter = require('./food.route');

apiRouter.use('/foods', foodRouter);


apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))


module.exports = apiRouter;

