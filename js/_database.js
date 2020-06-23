const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'dbname',
  password: 'dbpassword',
  port: 5432,
})

module.exports = client
