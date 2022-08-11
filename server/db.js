const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "uday.singh03",
    port: 5432,
    host: "localhost",
    database:"partydb"
});

module.exports = pool;
