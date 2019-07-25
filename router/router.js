const routes = require('express').Router()
const create = require('./create')

routes.use(create)

module.exports = routes