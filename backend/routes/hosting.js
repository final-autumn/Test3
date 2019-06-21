var express = require("express");
var router = express.Router();
const sql = require("mysql2");

const pool = sql.createPool({
  host: "localhost",
  user: "root",
  password: "mypython",
  database: "HostAndServe",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

router.get("/", function(req, res, next) {
  pool.query(`SELECT * FROM Hosting`, (err, rows, fields) => {
    res.send(rows);
  });
});

module.exports = router;
