const knex = require('knex')
const configs = require('../../knexfile')
const enviorment = process.env.NODE_ENV || 'development'

module.exports = knex(configs[enviorment])
