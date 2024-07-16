const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    databade: "node_pg_restapi"
})

module.exports = pool