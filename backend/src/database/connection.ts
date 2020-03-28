import Knex from 'knex'
const configuration = require('../../knexfile')

export default Knex(configuration.development)