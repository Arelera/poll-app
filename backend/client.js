const { Pool } = require('pg');
const { USER, PASSWORD, HOST, PORT, DATABASE } = require('./config');

const client = new Pool({
  user: process.env.DB_USER || USER,
  password: process.env.DB_PASSWORD || PASSWORD,
  host: process.env.DB_HOST || HOST,
  port: process.env.DB_PORT || PORT,
  database: process.env.DB || DATABASE,
});

module.exports = client;
