const Pool = require('pg').Pool

const pool = new Pool({
  user: 'root',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'boribilder'
})

module.exports = pool
